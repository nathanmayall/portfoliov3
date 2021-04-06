import Icons from "./Icons";
import Particles from "react-tsparticles";
import particleOptions from "./particleOptions.json";

export default function Title() {
  return (
    <>
      <div className="absolute h-screen min-w-full dark:bg-gray-900" />
      <Particles
        options={particleOptions}
        className="absolute h-screen min-w-full"
      />
      <div className="relative flex h-screen">
        <div className="px-20 py-4 m-auto text-center text-gray-700 duration-150 bg-white rounded-lg shadow-lg backdrop-filter backdrop-blur-sm dark:text-gray-300 hover:shadow-2xl hover:backdrop-blur-md bg-opacity-10">
          <h1 className="text-6xl font-thin tracking-wider text-shadow-lg">
            Nathan Mayall
          </h1>
          <p className="my-6 tracking-wide ">
            <code>Junior Software Engineer</code>
          </p>
          <Icons />
        </div>
      </div>
    </>
  );
}
