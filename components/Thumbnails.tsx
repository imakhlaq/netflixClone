import { Movie } from "../typing";
import Image from "next/legacy/image";

type Props = {
  //using firebase
  //movie:Movie | Documents
  movie: Movie;
};
const Thumbnails = ({ movie }: Props) => {
  return (
    <div className="relative h-28 w-[128px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt="moviebanner"
      />
    </div>
  );
};

export default Thumbnails;
