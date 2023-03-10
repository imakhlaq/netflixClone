import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { use, useRef, useState } from "react";
import { Movie } from "../typing";
import Thumbnails from "./Thumbnails";

type Props = {
  //using firebase
  //movie:Movie | Documents[]
  movies: Movie[];
  title: string;
};
const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const [isMoved, setIsMoved] = useState<boolean>(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      //checking client width and and scrolling by adding the inisital
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>

      <div className="group relative md:-ml-2">
        {isMoved && (
          <ChevronLeftIcon
            onClick={() => handleClick("left")}
            className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          />
        )}

        <div
          ref={rowRef}
          className=" flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide  md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnails key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          onClick={() => handleClick("right")}
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition-all hover:scale-125 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default Row;
