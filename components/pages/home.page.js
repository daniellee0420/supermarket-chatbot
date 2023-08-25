import React from "react";
import Navbar from "../common/navbar";
import HomeCategories from "./home/categories";
import { Divider } from "@mui/material";
import { BaseContainer } from "../common/elements";
import HomeFeatured from "./home/featured";
import Footer from "../common/footer";
import WatsonWrapper,{startRecord} from "../watsonWrapper";
import $ from "jquery";
const Home = () => {
  setInterval(() => {
    console.log("home")
    var watsonChatHome = $(".WatsonAssistantChatHost");
    var recordStartBtn = $("button#start_record.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record");
    var recordingBtn = $("button#recording.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record");
    console.log($(".WACInputContainer"))
    if(watsonChatHome.length != 0 && recordStartBtn.length == 0 && recordingBtn.length == 0){
      $(".WACInputContainer").append('<button class="WACInputContainer__SendButton WAC__button--base WAC__button--primary record" style="background-color: white;border: solid 1px cadetblue;" id="start_record" type="button" aria-label="Click to record your voice"><img style="width:24px; height:24px" src="https://www.vhv.rs/dpng/d/144-1448006_microphone-icon-logo-design-mic-symbol-music-mic.png"/></button>');
      $(".WACInputContainer").append('<button class="WACInputContainer__SendButton WAC__button--base WAC__button--primary record" style="display:none; background-color: white;border: solid 1px cadetblue;" id="recording" type="button" aria-label="Click to record your voice"><img style="width:40px; height:40px" src="https://assets-v2.lottiefiles.com/a/3073009a-1175-11ee-911a-2f7877ab6fd3/3DMmrkykp0.gif"/></button>');    
    }
    $('.record').on('mousedown', function() {
      // Action to perform when the button is pressed
      $("button#start_record.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record").hide();
      $("button#recording.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record").show();
      startRecord()
    });

    $('.record').on('mouseup', async function() {
      $("button#start_record.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record").show();
      $("button#recording.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record").hide();     
    });       
  }, 1000);
  return (
    <>
      <Navbar />
      <HomeCategories />
      <BaseContainer>
        <Divider
        
          sx={{
            borderColor: "rgba(0, 0, 0, 0.10)",
            my: {
              xs: 0,
              lg: 2,
            },
          }}
        />
      </BaseContainer>
      <HomeFeatured />
      <WatsonWrapper />
      <Footer />
    </>
  );
};

export default Home;
