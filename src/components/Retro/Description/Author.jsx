import React from 'react';
import './Author.scss';
import './img/user_avatar.jpg';

class Author extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="open_sticker__user_inf">
        <li><p>Author:</p></li>
        <li><a href="#"><img className="user_avatar" src="img/user_avatar.jpg" alt="user_avatar" /></a></li>
        <li><a className="user_inf__user_name" href="#">gromoverzhec1949@rambler.com</a></li>
      </ul>
    );
  }
}

export default Author;
