import React from 'react';

import Menu from '../Menu/Menu';

class RootContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
      <div>
          <Menu/>
          <img src ={require('img/webpack.png')} alt = 'wp' width={400} height={200}/>
      </div>
        );
    }
}

export default RootContainer;
