import { SiKubernetes, SiNodedotjs, SiWebpack } from "react-icons/si";

export default function Tools() {
  return (
    <div className="p-8 duration-150 bg-white rounded-lg shadow-lg bg-opacity-40 w-96 backdrop-filter backdrop-blur-sm hover:backdrop-blur-md">
      <h2 className="text-2xl text-shadow-sm">Tools</h2>
      <div className="flex justify-between mx-4 my-3 text-6xl">
        <SiNodedotjs className="text-nodejs" />
        <SiWebpack className="text-webpack" />
        <SiKubernetes className="text-kubernetes" />
      </div>
      <p>
        Git, GitHub, Xen Orchestra, Virtualisation, WSL, Docker, Kubernetes...
        the list goes on.
      </p>
    </div>
  );
}
