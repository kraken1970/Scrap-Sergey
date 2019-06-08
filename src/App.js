import React from "react";

import PhotoPreviewCard from "./components/cards/PhotoPreviewCard";
import VideoPreviewCard from "./components/cards/VideoPreviewCard";
import ArticlePriviewCard from "./components/cards/ArticlePreviewCard";

import TriviaCard from "./components/cards/TriviaCard";

import PreviewItemList from "./components/PreviewItemList";
import HeadLineBlock from "./components/Blocks/HeadLineBlock";

import HomePageLayout from "./components/Layouts/HomePageLayout";
import EmailSubscriptionForm from "./components/Forms/EmailSubscriptionForm";

import {
  photoCardData,
  videoCardData,
  articleCardData,
  triviaCardData,
  videoCardsArray
} from "./TEMPORARY/data";

import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <PhotoPreviewCard cardData={photoCardData} />
      <div className="margin" />
      <VideoPreviewCard cardData={videoCardData} />
      <div className="margin" />
      <ArticlePriviewCard cardData={articleCardData} />
      <div className="margin" />
      <TriviaCard cardData={triviaCardData} />
      <div className="margin" />
      <PreviewItemList cardsItems={videoCardsArray} Card={PhotoPreviewCard} />
      <div className="margin" />
      <HeadLineBlock name="RRRRRR" link="All dhfgsdgf" />
      <div className="margin" /> */}
      <HomePageLayout />
      <div className="margin" />
      <EmailSubscriptionForm />
    </div>
  );
}

export default App;
