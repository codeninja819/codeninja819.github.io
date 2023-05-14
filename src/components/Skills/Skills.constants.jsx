// import reactIcon from "../../assets/images/skills/react.png";
// import htmlIcon from "../../assets/images/skills/html.png";
// import cssIcon from "../../assets/images/skills/css.png";
// import bootstrapIcon from "../../assets/images/skills/bootstrap.png";
// import dotnetIcon from "../../assets/images/skills/dotnet.png";
// import sqlIcon from "../../assets/images/skills/db.png";
// import jsIcon from "../../assets/images/skills/js.png";
// import csharpIcon from "../../assets/images/skills/csharp.png";

// import unityIcon from "../../assets/images/skills/unity.png";
// import vuforiaIcon from "../../assets/images/skills/vuforia.png";

// import psIcon from "../../assets/images/skills/ps.png";
// import figmaIcon from "../../assets/images/skills/figma.png";

import htmlIcon from "../../assets/images/skills/html.png";
import cssIcon from "../../assets/images/skills/css.png";
import jsIcon from "../../assets/images/skills/js.png";

import reactIcon from "../../assets/images/skills/react.png";
import tailwindcssIcon from "../../assets/images/skills/tailwindcss.png";
import muiIcon from "../../assets/images/skills/mui.png";
import bootstrapIcon from "../../assets/images/skills/bootstrap.png";

import nodejsIcon from "../../assets/images/skills/nodejs.png";
import graphqlIcon from "../../assets/images/skills/graphql.png";
import pythonIcon from "../../assets/images/skills/python.png";
import djangoIcon from "../../assets/images/skills/django.png";

import sqlIcon from "../../assets/images/skills/db.png";
import mongodbIcon from "../../assets/images/skills/mongodb.png";
import csharpIcon from "../../assets/images/skills/csharp.png";

import solidityIcon from "../../assets/images/skills/solidity.png";
import rustIcon from "../../assets/images/skills/rust.png";
import goIcon from "../../assets/images/skills/go.png";
import golangIcon from "../../assets/images/skills/golang.png";

import hardhatIcon from "../../assets/images/skills/hardhat.png";
import truffleIcon from "../../assets/images/skills/truffle.png";
import moveIcon from "../../assets/images/skills/move.png";
import cppIcon from "../../assets/images/skills/cpp.png";

export const skillCat = {
  web: {
    categoryName: "Full Stack",
    percentage: 60,
    skillList: [
      { name: "HTML", xp: "8 YRS", icon: htmlIcon },
      { name: "CSS", xp: "8 YRS", icon: cssIcon },
      { name: "Javascript", xp: "8 YRS", icon: jsIcon },
      { name: "React", xp: "6 YRS", icon: reactIcon },
      { name: "Tailwind CSS", xp: "5 YRS", icon: tailwindcssIcon },
      { name: "Material UI", xp: "5 YRS", icon: muiIcon },
      // { name: "Bootstrap", xp: "5 YRS", icon: bootstrapIcon },
      { name: "Node.js", xp: "5 YRS", icon: nodejsIcon },
      { name: "GraphQL", xp: "5 YRS", icon: graphqlIcon },
      { name: "Python", xp: "5 YRS", icon: pythonIcon },
      // { name: "Django", xp: "5 YRS", icon: djangoIcon },
      { name: "SQL", xp: "2 YRS", icon: sqlIcon },
      { name: "MongoDB", xp: "2 YRS", icon: mongodbIcon },
      { name: "C#", xp: "3 YRS", icon: csharpIcon },
    ],
  },
  blockchain: {
    categoryName: "Blockchain",
    percentage: 40,
    skillList: [
      { name: "Solidity", xp: "2 YRS", icon: solidityIcon },
      { name: "Rust", xp: "2 YRS", icon: rustIcon },
      { name: "Go", xp: "2 YRS", icon: goIcon },
      { name: "Hardhat", xp: "2 YRS", icon: hardhatIcon },
      { name: "Truffle", xp: "2 YRS", icon: truffleIcon },
      { name: "C++", xp: "10+ YRS", icon: cppIcon },
    ],
  },
  // game: {
  //   categoryName: "Game Dev",
  //   percentage: 20,
  //   skillList: [
  //     { name: "Unity", xp: "5 YRS", icon: unityIcon },
  //     { name: "C#", xp: "3 YRS", icon: csharpIcon },
  //     { name: "Vuforia", xp: "3 YRS", icon: vuforiaIcon },
  //   ],
  // },
  soft: {
    categoryName: [
      "Creative",
      "Perseverant",
      "Patient",
      "Enthusiastic",
      "Hardworking",
      "Amusing",
    ],
    percentage: 100,
  },
};
