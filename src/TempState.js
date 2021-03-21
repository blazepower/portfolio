import bot from "./resources/botomatic.png";
import florist from "./resources/FloristFrenzy.png";
import functions from "./resources/Functions.png";
import intelliquote from "./resources/Intelliquote.png";
import murl from "./resources/murlLogo.png";
import player from "./resources/music_player.png";
import swag from "./resources/swagai.png";
import neveralone from "./resources/neveralone.png";
import tweets from "./resources/Tweet_data.png";

export const TempState = () => {
  return [
    {
      title: "React Music Player",
      img: player,
      url: "/project/player",
      details: [
        {
          title: "Technology",
          description: "React, Javascript, Typescript, SCSS, Azure Functions",
        },
      ],
    },
    {
      title: "Intelliquote",
      img: intelliquote,
      url: "/project/intelliquote",
      details: [
        {
          title: "Technology",
          description: "React, Javascript, Java, CSS, Spring Boot",
        },
      ],
    },
    {
      title: "SwagAI",
      img: swag,
      url: "/project/swag",
      details: [
        {
          title: "Technology",
          description: "React",
        },
      ],
    },
    {
      title: "NeverAlone",
      img: neveralone,
      url: "/project/neveralone",
      details: [
        {
          title: "Technology",
          description: "React, Javascript, Java, Spring Boot, CSS",
        },
      ],
    },
    {
      title: "Bot-o-Matic",
      img: bot,
      url: "/project/botmatic",
      details: [
        {
          title: "Technology",
          description: "Angular, Typescript, Java, Spring Boot",
        },
      ],
    },
    {
      title: "Florist Frenzy",
      img: florist,
      url: "/project/florist",
      details: [
        {
          title: "Technology",
          description: "C#, Unity",
        },
      ],
    },
    {
      title: "MURL",
      img: murl,
      url: "/project/murl",
      details: [
        {
          title: "Description",
          description:
            "Android application built to seamlessly open urls via a phone's camera or gallery",
        },
        {
          title: "Technology",
          description: "Java, Android, Firebase",
        },
        {
          title: "Awards",
          description:
            'Won "Best in Tech" at the 2019 WelcomeBackHack in Cleveland, OH',
        },
      ],
    },
    {
      title: "Automated Start & Stop Virtual Machines",
      img: functions,
      url: "/project/functions",
      details: [
        {
          title: "Technology",
          description: "C#, Azure Functions",
        },
      ],
    },
    {
      title: "Machine Learning Fact Checker",
      img: tweets,
      url: "/project/facts",
      details: [
        {
          title: "Technology",
          description: "Python, Pandas, Tensorflow, Keras",
        },
      ],
    },
  ];
};
