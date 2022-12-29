import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Movie } from "../typing";
import Thumbnails from "./Thumbnails";

type Props = {
  movies: Movie[];
  title: string;
};
const Row = ({ title, movies }: Props) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-all duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition-all hover:scale-125 group-hover:opacity-100" />
        <div className=" flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
          {movies.map((movie) => (
            <Thumbnails key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition-all hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default Row;