import React, { useState } from "react";
import styled from "styled-components";

import { createModel, KaldiRecognizer, Model } from "vosk-browser";
import Microphone from "./microphone";
import ModelLoader from "./model-loader";
import $ from "jquery";
import WatsonWrapper,{startRecord} from "../watsonWrapper";
const Word = styled.span<{ confidence: number }>`
  color: ${({ confidence }) => {
    const color = Math.max(255 * (1 - confidence) - 20, 0);
    return `rgb(${color},${color},${color})`;
  }};
  white-space: normal;
`;
export const Recognizer = () => {
  const [utterances, setUtterances] = useState([]);
  const [partial, setPartial] = useState("");
  const [loadedModel, setLoadedModel] = useState(null);
  const [recognizer, setRecognizer] = useState();
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const loadModel = async (path) => {
    setLoading(true);
    loadedModel?.model.terminate();
    const publicUrl = process.env.PUBLIC_URL || window.location.origin;
    const model = await createModel(publicUrl + "/models/" + path);
    setLoadedModel({ model, path });
    const recognizer = new model.KaldiRecognizer(48000);
    recognizer.setWords(true);
    recognizer.on("result", (message) => {
      const result = message.result;
        if(result.text.length >1){
          startRecord(result.text)
      }
    });
  
    recognizer.on("partialresult", (message) => {
      setPartial(message.result.partial);
    });
  
    setRecognizer(() => {
      setLoading(false);
      setReady(true);
      return recognizer;
    });
  };

  return (
    <div style={{display: "inline-flex"}}>
      <ModelLoader
        onModelChange={(path) => setReady(loadedModel?.path === path)}
        onModelSelect={(path) => {
          if (loadedModel?.path !== path) {
            loadModel(path);
          }
        }}
        loading={loading}
      />
      <Microphone recognizer={recognizer} loading={loading} ready={ready} />
    </div>
  );
};
