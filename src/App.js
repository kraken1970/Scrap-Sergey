import React from "react";
import PhotoPreviewCard from "./components/cards/PhotoPreviewCard";

import user01 from "./images/PhotoPreviewCards/photoPreviewCard01.jpg";

import "./App.scss";

const cardData = {
  userImg: user01,
  description: "Police were not able to say they had a suspect -- until April",
  name: "Ivan",
  sport: "box",
  organization: "killers"
};

function App() {
  return (
    <div className="App">
      <PhotoPreviewCard cardData={cardData} />
    </div>
  );
}

export default App;
