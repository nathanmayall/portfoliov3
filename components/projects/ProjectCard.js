import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const { name, description, url, image } = project;

  return (
    <div className="min-h-full p-3 text-center text-gray-700 duration-150 bg-white rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-sm hover:backdrop-blur-md dark:bg-Skobeloff dark:text-gray-300">
      <div>
        <h3 className="text-3xl text-shadow-sm">{name}</h3>
        <p className="mb-3">{description}</p>
      </div>
        <Image
          src={image}
          alt=""
          layout="responsive"
          className="rounded-lg shadow-lg cursor-pointer"
          height={400}
          width={800}
          placeholder="blur"
        />
    </div>
  );
};

export default ProjectCard;
