import { SiJavascript, SiPostgresql, SiTypescript } from "react-icons/si";

export default function Languages() {
  return (
    <div className="p-8 text-center text-gray-700 duration-150 bg-white rounded-lg shadow-lg bg-opacity-40 w-96 backdrop-filter backdrop-blur-sm hover:backdrop-blur-md">
      <h2 className="text-2xl text-shadow-sm">Languages</h2>
      <div className="flex justify-between mx-4 my-3 text-6xl">
        <SiJavascript className="bg-white text-javascript" />
        <SiPostgresql className="text-postgresql" />
        <SiTypescript className="bg-white text-typescript" />
      </div>
      <p>
        My main development languages are Javascript, Typescript, HTML, CSS etc.
        I also know SQL syntax as I do both front-end and back-end work.
      </p>
    </div>
  );
}
