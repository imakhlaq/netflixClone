import MuiModal from "@mui/material/Modal";
import { modalState, movieState } from "../atoms/modalAtoms";
import { useRecoilState } from "recoil";
import { HiOutlineXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Movie, Element, Genre } from "../typing";

const Modal = () => {
  const [showModal, setshowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailor, setTrailor] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);

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
        const index = res.video.results.findIndex(
          (ele: Element) => ele.type === "Trailer"
        );
        setTrailor(res.video?.results[index]?.key);
      }
      if (res?.genres) {
        setGenres(res.genres);
      }
    };

    fetchMovie();
  }, [movie]);

  useEffect(() => {}, []);

  const handleClose = () => {
    setshowModal(false);
  };

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className="modalbtn absolute right-5 top-5 !z-40 border-none bg-[#181818] hover:text-red-600 hover:bg-[#181818]"
        >
          <HiOutlineXMark className="w-6 h-6" />
        </button>
        <div></div>
      </>
    </MuiModal>
  );
};
export default Modal;
