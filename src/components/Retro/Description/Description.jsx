import React from 'react';
import './Description.scss';
import Title from './Title';
import Text from './Text';
import Buttons from './Buttons';

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
  }

  handleClick() {
    this.setState(() => ({ modalVisible: !this.state.modalVisible }
    ));
  }

  hide() {
    this.setState(() => ({ modalVisible: false }
    ));
  }

  render() {
    return (
      <div className="container_open_sticker">
        <div className="open_sticker">
          <Title />
          <Text />
          <Buttons />
        </div>
      </div>
    );
  }
}
