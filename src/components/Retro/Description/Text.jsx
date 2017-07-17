import React from 'react';
import './Text.scss';
import Author from './Author';

class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <h2 className="description_title">Description:</h2>
          <p className="textArea__open_sticker">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias assumenda deserunt, dolore dolorem dolorum esse excepturi fugiat fugit laborum magnam molestiae nesciunt odio officia sapiente sunt vero vitae. Quos.</p>
        <Author />
      </form>
    );
  }
}

export default Text;
