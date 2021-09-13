import PostittImage from "../../public/sites/postitt.png";
import GameUnderImage from "../../public/sites/GameUnder.png";
import AbSocialImage from "../../public/sites/absocial.png";

const projects = [
  {
    id: 0,
    name: "Postitt",
    description: "A reddit clone made using Typescript, NextJS, and TypeORM.",
    url: "https://postitt.io",
    image: PostittImage,
  },
  {
    id: 1,
    name: "GameUnder",
    description:
      "A games comparison site made using NextJS and Google Firebase.",
    url: "https://gameunder.store",
    image: GameUnderImage,
  },
  {
    id: 3,
    name: "AbSocial Chat",
    description: "A real time chat website built on Bootstrap and GraphQL.",
    url: "https://absocial.me",
    image: AbSocialImage,
  },
];

export default projects;
