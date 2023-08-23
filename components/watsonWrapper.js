import React from "react";
import {
  WebChatContainer,
  setEnableDebug,
} from "@ibm-watson/assistant-web-chat-react";
import config from "@/helpers/config";
import { addItem,removeItem, clearCart } from "@/redux/slices/cart.slice";
import { addFavItem, removeFavItem} from "@/redux/slices/favorite.slice";
import { store } from "@/redux/store";

const webChatOptions =
  process.env.NODE_ENV === "production"
    ? {
        integrationID: "361716ee-db18-404b-94c9-a4cb9f4aaa38", // The ID of this integration.
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

function onBeforeRender(instance) {
  try {
    // Make the instance available to the React components.
    instance.on({
      type: "receive",
      handler: (event) => receiveHandler(event),
    });

    // Do any other work you might want to do before rendering. If you don't need any other work here, you can just use
    // onBeforeRender={setInstance} in the component above.
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
    if(event.data.context.skills['actions skill'].action_variables[config.productNameVariableID] && action_self){
      console.log(event.data.context.skills['actions skill'].action_variables)
    }

    if (
      action_self.action_variables[config.productNameVariableID] &&
      action_self.action_variables[config.productCountVariableID]
    ) {
      const product_record = config.products.filter(
        (x) =>
          x.title.toLocaleLowerCase() ===
          action_self.action_variables[
            config.productNameVariableID
          ].toLocaleLowerCase()
      );

      if (product_record.length > 0) {
        console.log(action_self)
        //<--------------------------- shopping cart management------------------------------>
        if(action_self.source.action == "action_1205"){
          store.dispatch(
            addItem({
              ...product_record[0],
              qt: action_self.action_variables[config.productCountVariableID],
            })
          );
        }
        if(action_self.source.action == "action_1205-2" && action_self.action_variables[config.productCountVariableID] == "yes"){
          store.dispatch(
            removeItem({
              ...product_record[0],
              qt: action_self.action_variables[config.productCountVariableID],
            })
          );
        }
        //<--------------------------- shopping cart management------------------------------>

        //<--------------------------- favorite cart management------------------------------>

        if(action_self.source.action == "action_1205-3" && action_self.action_variables[config.productCountVariableID] == "yes"){
          store.dispatch(
            addFavItem({
              ...product_record[0],
              qt: action_self.action_variables[config.productCountVariableID],
            })
          );
        }   
        console.log(action_self.source.action)
        if(action_self.source.action == "action_1205-2-2" && action_self.action_variables[config.productCountVariableID] == "yes"){
          console.log(action_self.action_variables)
          store.dispatch(
            removeFavItem({
              ...product_record[0],
              qt: action_self.action_variables[config.productCountVariableID],
            })
          );
        }              
        //<--------------------------- favorite cart management------------------------------>
      }
    }
  }
}
const WatsonWrapper = (props) => {
  return (
    <WebChatContainer
      config={webChatOptions}
      onBeforeRender={(instance) => onBeforeRender(instance)}
    />
  );
};

export default WatsonWrapper;
// 