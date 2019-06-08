import photo01 from "../images/PhotoPreviewCards/photoPreviewCard01.jpg";
import video01 from "../images/VideoPreviewCards/videoPreviewCard01.jpg";
import article01 from "../images/ArticlePreviewCards/articlePreviewCard01.jpg";
import poll01 from "../images/PollsCard/poll01.jpg";

//random id for key function
export const idKey = () => {
  return ((Math.random() * new Date().getTime()) / 100000000).toString();
};

export const photoCardData = {
  userImg: photo01,
  description: "Police were not able to say they had a suspect -- until April",
  name: "Ivan",
  sport: "box",
  organization: "killers"
};

export const pollCardData = {
  userImg: poll01
};

export const videoCardData = {
  userImg: video01,
  description: "The Golden State Killer is believed to be linked to more t",
  name: "Freddy Kruger",
  sport: "mordoboy",
  organization: "Hollywood"
};

export const articleCardData = {
  userImg: article01,
  description:
    "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
  title: "Title for article"
};

export const triviaCardData = {
  category: "Category",
  question:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation?",
  answer: "Ut enim minim veniam nostrud exercitation"
};

export const videoCardsArray = [
  {
    userImg: video01,
    description: "The Golden State Killer is believed to be linked to more t",
    name: "Freddy Kruger",
    sport: "mordoboy",
    organization: "Hollywood",
    id: idKey()
  },
  {
    userImg: video01,
    description: "The Golden State Killer is believed to be linked to more t",
    name: "Freddy Kruger",
    sport: "mordoboy",
    organization: "Hollywood",
    id: idKey()
  },
  {
    userImg: video01,
    description: "The Golden State Killer is believed to be linked to more t",
    name: "Freddy Kruger",
    sport: "mordoboy",
    organization: "Hollywood",
    id: idKey()
  }
];

export const photoCardsArray = [
  {
    userImg: photo01,
    description: "The Golden State Killer is believed to be linked to more t",
    name: "Freddy Kruger",
    sport: "mordoboy",
    organization: "Hollywood",
    id: idKey()
  },
  {
    userImg: photo01,
    description: "The Golden State Killer is believed to be linked to more t",
    name: "Freddy Kruger",
    sport: "mordoboy",
    organization: "Hollywood",
    id: idKey()
  },
  {
    userImg: photo01,
    description: "The Golden State Killer is believed to be linked to more t",
    name: "Freddy Kruger",
    sport: "mordoboy",
    organization: "Hollywood",
    id: idKey()
  }
];

export const articleCardsArray = [
  {
    userImg: article01,
    description:
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    title: "Title for article",
    id: idKey()
  },
  {
    userImg: article01,
    description:
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    title: "Title for article",
    id: idKey()
  },
  {
    userImg: article01,
    description:
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    title: "Title for article",
    id: idKey()
  }
];

export const pollCardsArray = [
  {
    userImg: poll01,
    id: idKey()
  },
  {
    userImg: poll01,
    id: idKey()
  },
  {
    userImg: poll01,
    id: idKey()
  }
];
