import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

export default class Menu extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
      <div>
        <ul className="menu">
          <li className="menu__item">
            <Link className="menu__link" to='/'>Project</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to='/calendar'>Calendar</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to='/chat'>Chat</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to='/table'>Table</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to='/backlog'>Backlog</Link>
          </li>
        </ul>
      </div>
        );
    }
}
