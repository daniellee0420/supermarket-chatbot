import React from "react";
import {
  WebChatContainer,
  setEnableDebug,
} from "@ibm-watson/assistant-web-chat-react";
import config from "@/helpers/config";
import { addItem,removeItem, clearCart } from "@/redux/slices/cart.slice";
import { addFavItem, removeFavItem} from "@/redux/slices/favorite.slice";
import { store } from "@/redux/store";
import $ from "jquery";
import { testRecognition, testStart,testStop} from "./vosk/microphone";
import { createModel, KaldiRecognizer, Model } from "vosk-browser";
var globalInstance;
var modelName = "vosk-model-small-en-us-0.15.tar.gz";

const webChatOptions =
  process.env.NODE_ENV === "production"
    ? {
        integrationID: "bf974de7-7eb6-4d29-9b74-9b37eb4f108b", // The ID of this integration.
        region: "au-syd", // The region your integration is hosted in.
        serviceInstanceID: "91b891fe-b4ac-44ae-a877-360a1a9075d2", // The ID of your service instance.
        showCloseAndRestartButton: true,
      }
    : {
        integrationID: "bf974de7-7eb6-4d29-9b74-9b37eb4f108b", // The ID of this integration.
        region: "au-syd", // The region your integration is hosted in.
        serviceInstanceID: "91b891fe-b4ac-44ae-a877-360a1a9075d2", // The ID of your service instance.
        showCloseAndRestartButton: true,
      };

export async function sendText(text){
  const mockSendObject = {
    input: {
      message_type: 'text',
      text: text
    }
  };   
  globalInstance.send(mockSendObject);       
}
function onBeforeRender(instance) {
  globalInstance = instance;
  try {
    // Make the instance available to the React components.
    instance.on({
      type: "receive",
      handler: (event) => receiveHandler(event),
    });      
  } catch (error) {
    console.log(error);
  }
}
function receiveHandler(event) {
  if (
    event?.data?.output?.debug?.turn_events &&
    event?.data.output.debug.turn_events.findIndex(
      (x) => x.event === "action_finished"
    ) > -1
  ) {
    const action_self = event.data.output.debug.turn_events.filter(
      (x) => x.event === "action_finished"
    )[0];
    // if (
    //   action_self.action_variables[config.productNameVariableID] &&
    //   action_self.action_variables[config.productCountVariableID]
    // ) {
    //   const product_record = config.products.filter(
    //     (x) =>
    //       x.title.toLocaleLowerCase() ===
    //       action_self.action_variables[
    //         config.productNameVariableID
    //       ].toLocaleLowerCase()
    //   );
    //   if (product_record.length > 0) {
    //     //<--------------------------- shopping cart management------------------------------>
    //     if(action_self.source.action == "action_1205"){
    //       store.dispatch(
    //         addItem({
    //           ...product_record[0],
    //           qt: action_self.action_variables[config.productCountVariableID],
    //         })
    //       );
    //     }
    //     if(action_self.source.action == "action_1205-2" && action_self.action_variables[config.productCountVariableID] == "yes"){
    //       store.dispatch(
    //         removeItem({
    //           ...product_record[0],
    //           qt: action_self.action_variables[config.productCountVariableID],
    //         })
    //       );
    //     }
    //     //<--------------------------- shopping cart management------------------------------>

    //     //<--------------------------- favorite cart management------------------------------>

    //     if(action_self.source.action == "action_1205-3" && action_self.action_variables[config.productCountVariableID] == "yes"){
    //       store.dispatch(
    //         addFavItem({
    //           ...product_record[0],
    //           qt: action_self.action_variables[config.productCountVariableID],
    //         })
    //       );
    //     }   
    //     if(action_self.source.action == "action_1205-2-2" && action_self.action_variables[config.productCountVariableID] == "yes"){
    //       store.dispatch(
    //         removeFavItem({
    //           ...product_record[0],
    //           qt: action_self.action_variables[config.productCountVariableID],
    //         })
    //       );
    //     }              
    //     //<--------------------------- favorite cart management------------------------------>
    //   }
    // }
  }
}

 //<--------------------------- load vosk model ------------------------------>
async function loadModel(path) {
  const publicUrl = process.env.PUBLIC_URL || window.location.origin;
  const model = await createModel(publicUrl + "/models/" + path);
  const recognizer = new model.KaldiRecognizer(48000);
  recognizer.setWords(true);
  recognizer.on("result", (message) => {
    const result = message.result;
    if(result.text.length >1){
      sendText(result.text)
    }
  });
  return recognizer;
};
//<--------------------------- load vosk model ------------------------------>

async function onAfterRender() {
  console.log(process.env.NODE_ENV)
  var resRecog = loadModel(modelName);
  resRecog.then((recognizer)=>{
    testRecognition(recognizer);
    setInterval(() => {
      var recordStartBtn = $("button#start_record.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record");
      var recordStopBtn = $("button#stop_record.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record");       
      if(recordStartBtn.length == 0 && recordStopBtn.length == 0){
        $(".WACInputContainer").append('<button class="WACInputContainer__SendButton WAC__button--base WAC__button--primary record" style="background-color: white;border: solid 1px cadetblue;" id="start_record" type="button" aria-label="Click to record your voice"><img style="width:24px; height:30px" src="https://www.shareicon.net/data/2015/11/12/670698_mute_512x512.png"/></button>');
        $(".WACInputContainer").append('<button class="WACInputContainer__SendButton WAC__button--base WAC__button--primary record" style="display:none; background-color: white;border: solid 1px cadetblue;" id="stop_record" type="button" aria-label="Click to record your voice"><img style="width:24px; height:30px" src="https://cdn-icons-png.flaticon.com/512/25/25682.png"/></button>');    
        
        $("button#start_record.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary").click(function(){
          $("button#start_record.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record").hide();
          $("button#stop_record.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record").show();        
          testStart();
        });
        $("button#stop_record.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary").click(function(){
          $("button#stop_record.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record").hide();                
          $("button#start_record.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record").show();
          testStop();
        });      
      }

    }, 1000);
  });
}
const WatsonWrapper = (props) => {
  return (
    <WebChatContainer
      config={webChatOptions}
      onBeforeRender={(instance) => onBeforeRender(instance)}
      onAfterRender={()=>onAfterRender()}
    />
  );
};

export default WatsonWrapper;