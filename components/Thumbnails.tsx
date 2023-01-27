import { Movie } from "../typing";
import Image from "next/legacy/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtoms";

type Props = {
  //using firebase
  //movie:Movie | Documents
  movie: Movie;
};
const Thumbnails = ({ movie }: Props) => {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setshowModal] = useRecoilState(modalState);
  return (
    <div
      onClick={() => {
        setCurrentMovie(movie);
        setshowModal(true);
      }}
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
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
