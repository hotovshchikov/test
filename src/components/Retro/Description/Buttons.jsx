import React from 'react';
import './Buttons.scss';
import Trash from "./Trash";
import Cancel from "./Cancel";
import Save from "./Save";
import Flag from "./Flag";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className="open_sticker__buttons">
        <li>
          <Trash />
        </li>
        <li>
          <Cancel />
        </li>
        <li>
          <Save />
        </li>
        <li>
          <Flag />
        </li>
      </ul>
    )
  }
}

export default Buttons;
