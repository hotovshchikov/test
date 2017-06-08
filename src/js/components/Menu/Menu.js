import React from 'react';
import './Menu.scss';

export default class Menu extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
          <ul className="menu">
              <li className="menu__item">
                  <a href="/page-1" className="menu__link">Page 1</a>
              </li>
              <li className="menu__item">
                  <a href="/page-2" className="menu__link">Page 2</a>
              </li>
              <li className="menu__item">
                  <a href="/page-3" className="menu__link">Page 3</a>
              </li>
              <li className="menu__item">
                  <a href="/page-4" className="menu__link">Page 4</a>
              </li>
          </ul>
        );
    }
}
