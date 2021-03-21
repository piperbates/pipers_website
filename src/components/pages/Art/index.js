import React, { useState } from "react";
import "./style.css";
import "../../../box-style.css";

import "../../../gallery.css";
import galleryArr from "../../../data/gallery-arr";
import ReactModal from "react-modal";

export default function Art() {
  const [modalView, setModalView] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  function handleClick(title, img, desc) {
    setModalView(!modalView);
    setModalInfo({ title, img, desc });
  }

  function closeModal() {
    if (modalView) {
      setModalView(false);
    } else {
      return;
    }
  }
  return (
    <div className="anchor-box">
      <a name="art" href="/#">
        &nbsp;
      </a>

      <div id="art-container" className="box">
        <h2>Art and Illustration</h2>
        <div id="art-box">
          <p>
            I've always loved to draw, and spent 5 years as a freelance
            illustrator creating children's books, branding illustration,
            portraits and more. Here's some of my favourite pieces I've worked
            on! If you want to see more of my illustration work, you can find my
            illustration portfolio here:{" "}
            <a href="http://www.piperstrange.com">PiperStrange.com</a>
          </p>

          <div id="gallery" className="misc-gallery">
            <ReactModal isOpen={
              modalView
            } className="art-modal"
            id="modal"
            onRequestClose={closeModal} >
              <img src={modalInfo.img}/>
            </ReactModal>


              {galleryArr.map((a) => {
                return (
                  <img
                    src={a.src}
                    alt={a.alt}
                    onClick={() => {
                      handleClick(a.title, a.src, a.desc);
                    }}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
