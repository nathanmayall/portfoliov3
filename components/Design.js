import { DiHtml5, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

export default function Design() {
  return (
    <div className="justify-between p-8 text-center text-gray-700 duration-150 bg-white rounded-lg shadow-lg bg-opacity-40 w-96 backdrop-filter backdrop-blur-sm hover:backdrop-blur-md">
      <h2 className="text-2xl text-shadow-sm">Design</h2>
      <div className="flex justify-between mx-4 my-3 text-6xl">
        <DiHtml5 className="text-html5" />
        <SiTailwindcss className="text-TailwindLogo" />
        <DiReact className="text-ReactLogo" />
      </div>
      <p>
        Using Material Design, TailwindCSS and other component bootstraps, I've
        made a few sites and applications. This is the first site I developed
        using node/react: absocial.me Ask me about others!
      </p>
    </div>
  );
}
