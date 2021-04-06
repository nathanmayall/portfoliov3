import Icons from "./Icons";
import Particles from "react-tsparticles";
import particleOptions from "./particleOptions.json";

export default function Title() {
  return (
    <Fragment>
      <Particles
        options={particleOptions}
        className="absolute h-screen min-w-full"
      />
      <div className="relative flex h-screen">
        <div
          className="px-20 py-4 m-auto text-center text-gray-700 duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl bg-opacity-10 bg-blend-overlay"
          style={{ backdropFilter: "blur(3px)" }}
        >
          <h1 className="text-6xl font-thin tracking-wider text-shadow-lg">
            Nathan Mayall
          </h1>
          <p className="my-6 tracking-wide ">
            <code>Junior Software Engineer</code>
          </p>
          <Icons />
        </div>
      </div>
    </Fragment>
  );
}
