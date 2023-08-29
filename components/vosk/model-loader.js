import { Button} from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  box-sizing: border-box;
  margin-left: 0.5rem;
`;
const models = [
  {
    name: "English",
    path: "vosk-model-small-en-us-0.15.tar.gz",
  },
];

const ModelLoader = ({
  onModelSelect,
  loading,
}) => {
const model = models[0].path;
  return (
    <div>
      <StyledButton onClick={() => onModelSelect(model)}>
        {loading ? "Loading..." : "Resource Load"}
      </StyledButton>
    </div>
  );
};

export default ModelLoader;
