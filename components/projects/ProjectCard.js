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
      <Link href={url} passHref>
        <button className="w-32 px-4 py-1 mb-4 text-2xl text-gray-100 duration-150 rounded-lg shadow-lg hover:bg-linkButtonHover bg-linkButtonLight dark:bg-linkButton dark:hover:text-gray-700 text-shadow-md">
          Link
        </button>
      </Link>
      <Link href={url} passHref>
        <Image
          src={image}
          alt=""
          layout="responsive"
          className="rounded-lg shadow-lg cursor-pointer"
          height={400}
          width={800}
          placeholder="blur"
        />
      </Link>
    </div>
  );
};

export default ProjectCard;
