import MuiModal from "@mui/material/Modal";
import { modalState, movieState } from "../atoms/modalAtoms";
import { useRecoilState } from "recoil";
import { HiOutlineXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Element, Genre } from "../typing";
import ReactPlayer from "react-player";
import { FaPlay, FaThumbsUp, FaVolumeOff, FaVolumeUp } from "react-icons/fa";
import { PlusIcon } from "@heroicons/react/24/outline";

const Modal = () => {
  const [showModal, setshowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailor, setTrailor] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!movie) return;

    const fetchMovie = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      );
      const res = await data.json();

      if (res?.videos) {
        const index = res.videos.results.findIndex(
          (ele: Element) => ele.type === "Trailer"
        );
        setTrailor(res.videos?.results[index]?.key);
      }
      if (res?.genres) {
        setGenres(res.genres);
      }
    };
    fetchMovie();
  }, [movie]);

  const handleClose = () => {
    setshowModal(false);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 w-full max-w-5xl mx-auto overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          onClick={handleClose}
          className="modalbtn absolute right-5 top-5 !z-40 border-none bg-[#181818] hover:text-red-600 hover:bg-[#181818]"
        >
          <HiOutlineXMark className="w-6 h-6" />
        </button>
        {/* to make it responsive you have to provide these specific classes */}
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailor}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={isMuted}
          />
          <div className=" absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7 text-black" />
                Play
              </button>
              <button className="modalbtn ">
                <PlusIcon className="h-7 w-7" />
              </button>
              <button className="modalbtn">
                <FaThumbsUp className="h-7 w-7" />
              </button>
            </div>
            <button
              onClick={() => setIsMuted((state: boolean) => !state)}
              className="modalbtn"
            >
              {isMuted ? (
                <FaVolumeOff className="h-6 w-6" />
              ) : (
                <FaVolumeUp className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        
      </>
    </MuiModal>
  );
};
export default Modal;
