import React from 'react';
import Description from "../../components/Retro/Description/Description";

class Retro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Retro page</h1>
        <Description />
      </div>
    );
  }
}

Retro.propTypes = {};

export default Retro;
