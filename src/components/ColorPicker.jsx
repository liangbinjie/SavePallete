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
      <div className="container">
        <div>
          <input
            type="color"
            value={color}
            onChange={function(e) {
              setColor(e.target.value) 
              document.getElementById('hex-input').value = color}
            }
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
            <label htmlFor="hex-input">Hex code: </label>
            <input
              type="text"
              onChange={function(e) {
                if (Array.from(e.target.value)[0] === "#") {
                  let x = e.target.value
                  x.substring(0)
                  setColor(e.target.value)
                } else {
                  setColor("#" + e.target.value)
                }
              }}
              name="hex-input"
              id="hex-input"
            /><br/><br/>
            <label htmlFor="title">Name: </label>
            <input
              type="text"
              name="title"
              id="title"
            />
          </form>
          <br />
          <button type="submit" className="save-btn">
            <BsBookmarkHeart /> Save
          </button>
        </div>
      </div>
    </>
  );
}
