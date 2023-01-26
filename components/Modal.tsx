import MuiModal from "@mui/material/Modal";
import { modalState } from "../atoms/modalAtoms";
import { useRecoilState } from "recoil";

const Modal = () => {
  const [showModal, setshowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setshowModal(false);
  };

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <></>
    </MuiModal>
  );
};
export default Modal;
