import React from 'react';
import './Title.scss';
import './img/close_window.png';

class Title extends React.Component {

  render () {
    return (
      <div className="open_sticker__sticker_title">
        <h1 className="title">What was great in the sprint?</h1>
        <a className="close_window" href="#"></a>
      </div>
    )
  }
}

export default Title;
