import React from "react";
import PhotoPreviewCard from "./components/cards/PhotoPreviewCard";
import VideoPreviewCard from "./components/cards/VideoPreviewCard";
import ArticlePriviewCard from "./components/cards/ArticlePriviewCard";

import "./App.scss";

import photo01 from "./images/PhotoPreviewCards/photoPreviewCard01.jpg";
import video01 from "./images/VideoPreviewCards/videoPreviewCard01.jpg";
import article01 from "./images/ArticlePreviewCards/articlePreviewCard01.jpg";

const PhotoCardData = {
  userImg: photo01,
  description: "Police were not able to say they had a suspect -- until April",
  name: "Ivan",
  sport: "box",
  organization: "killers"
};

const VideoCardData = {
  userImg: video01,
  description: "The Golden State Killer is believed to be linked to more t",
  name: "Freddy Kruger",
  sport: "mordoboy",
  organization: "Hollywood"
};

const ArticleCardData = {
  userImg: article01,
  description:
    "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
  title: "Title for article"
};

function App() {
  return (
    <div className="App">
      <PhotoPreviewCard cardData={PhotoCardData} />
      <div className="margin" />
      <VideoPreviewCard cardData={VideoCardData} />
      <div className="margin" />
      <ArticlePriviewCard cardData={ArticleCardData} />
    </div>
  );
}

export default App;
