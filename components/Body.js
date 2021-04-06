import Design from "./Design";
import Languages from "./Languages";
import Tools from "./Tools";

export default function Body() {
  return (
    <div className="w-auto h-auto bg-center bg-cover bg-bio-image">
      <div className="bg-gradient-to-b to-transparent from-white">
        <div className="text-center text-gray-700">
          <h1 className="mb-1 text-6xl text-shadow-md">My Expertise</h1>
          <p>
            I'm a full stack junior developer, currently a student at Manchester
            Codes. This is a collection of my work so far.
          </p>
        </div>
        <div className="flex flex-col flex-wrap w-auto h-screen place-content-around">
          <Design />
          <Languages />
          <Tools />
        </div>
      </div>
    </div>
  );
}
