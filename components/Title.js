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
      <div className="relative flex items-center justify-center h-screen">
        <div className="py-4 text-center text-gray-700 duration-150 bg-white rounded-lg shadow-lg w-80 md:w-auto md:p-10 md:m-auto backdrop-filter backdrop-blur-sm dark:text-gray-300 hover:shadow-2xl hover:backdrop-blur-md bg-opacity-10">
          <h1 className="text-6xl font-thin tracking-wider text-shadow-lg">
            Nathan Mayall
          </h1>
          <p className="my-6 tracking-wide ">
            <code>Software Engineer</code>
          </p>
          <Icons />
        </div>
      </div>
    </>
  );
}
