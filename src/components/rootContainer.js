import React from 'react';

import Menu from './Menu/Menu';

class RootContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
      <div>
          <Menu/>
      </div>
        );
    }
}

export default RootContainer;
