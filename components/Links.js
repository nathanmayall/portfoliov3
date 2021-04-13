import Link from "next/link";

export default function Links() {
  return (
    <div className="flex justify-center p-3">
      <div className="flex flex-wrap justify-center p-3 space-x-3 text-3xl text-gray-700 duration-150 bg-white rounded-lg shadow-lg md:space-x-10 dark:text-gray-300 text-shadow-md w-80 md:w-1/2 backdrop-filter backdrop-blur-sm bg-opacity-40 hover:backdrop-blur-md">
        <Link href="https://postitt.io/">
          <a
            target="_blank"
            className="duration-150 hover:text-gray-900 dark:hover:text-gray-800"
          >
            Postitt
          </a>
        </Link>
        <Link href="https://amp.nathanmayall.com/">
          <a
            target="_blank"
            className="duration-150 hover:text-gray-900 dark:hover:text-gray-800"
          >
            AMP
          </a>
        </Link>
        <Link href="https://absocial.me/">
          <a
            target="_blank"
            className="duration-150 hover:text-gray-900 dark:hover:text-gray-800"
          >
            AbSocial
          </a>
        </Link>
      </div>
    </div>
  );
}
