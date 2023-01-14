import React, { useState } from "react";
import "./colorpicker.css";
import { MdContentCopy } from "react-icons/md";
import { BsBookmarkHeart } from "react-icons/bs";

function copy(color) {
  navigator.clipboard.writeText(color)
  alert('Color hex copied')
}

export default function ColorPicker() {
  const [color, setColor] = useState("#000000");

  return (
    <>
      <div className="grid">
        <div>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="box"
            name="color-box"
            id="color-box"
          />
          <h1>
            {color} <MdContentCopy title="copy hex code" onClick={() => copy(color)}/>
          </h1>
        </div>

        <div>
          <form>
            <label for="hex-input">Hex code: </label>
            <input
              type="text"
              onChange={(e) => setColor("#" + e.target.value)}
              name="hex-input"
              id="hex-input"
            /><br/><br/>
            <label for="title">Title: </label>
            <input
              type="text"
              name="title"
              id="title"
            />
          </form>
          <br />
          <button className="save-btn">
            <BsBookmarkHeart /> Save
          </button>
        </div>
      </div>
    </>
  );
}
