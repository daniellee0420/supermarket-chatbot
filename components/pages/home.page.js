import React from "react";
import Navbar from "../common/navbar";
import HomeCategories from "./home/categories";
import { Divider } from "@mui/material";
import { BaseContainer } from "../common/elements";
import HomeFeatured from "./home/featured";
import Footer from "../common/footer";
import WatsonWrapper from "../watsonWrapper";
import $ from "jquery";

const Home = () => {
  // setInterval(() => {
  //   var watsonChatHome = $(".WatsonAssistantChatHost");
  //   var micBtn = $("div#mic-active");
  //   // var recordingBtn = $("button#recording.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record");
  //   console.log(micBtn.length);
  //   // if(micBtn.length == 1 && $(".WACInputContainer").length>1){
  //   //   console.log($(".WACInputContainer"))
  //   //   $(".WACInputContainer")[0].append(<Recognizer/>)
  //   // }
  //   // $('.record').on('mousedown', function() {
  //   //   // Action to perform when the button is pressed
  //   //   $("button#start_record.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record").hide();
  //   //   $("button#recording.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record").show();
  //   //   startRecord()
  //   // });

  //   // $('.record').on('mouseup', async function() {
  //   //   $("button#start_record.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record").show();
  //   //   $("button#recording.WACInputContainer__SendButton.WAC__button--base.WAC__button--primary.record").hide();     
  //   // });       
  // }, 1000);
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
