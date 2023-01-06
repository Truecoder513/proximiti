import React from "react";
import { CloseRound } from "../assets/icons/Icons";
import { useSelector, useDispatch } from "react-redux";
import modalSelector from "../store/selectors/modalSelector";
import { closeModal } from "../store/actions/modalActions";
import { useEffect } from "react";

const Modal = () => {
  const modal = useSelector(modalSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modal.open === true) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "initial";
    }
  }, [modal]);

  return (
    <>
      {modal.open ? (
        <div className="modal-box">
          <div className="modal-box-content">
            <span
              className="modal-close"
              onClick={() => dispatch(closeModal())}
            >
              <CloseRound />
            </span>
            <div
              style={{ overflowY: "auto", maxHeight: "80vh", width: "100%" }}
            >
              {modal.content}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
