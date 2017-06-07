import React from 'react';

import './App.scss';

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(window);
  }

  render() {
    return (
      <form className="form">
        <h3 className="header">{this.props.title}</h3>

        <div className="form-field">
          <label htmlFor="title">Title:</label>
          <input name="title" />
        </div>

        <div className="form-field">
          <label htmlFor="link">Link:</label>
          <input name="link" />
        </div>

        <button className="form-submit" onClick={this.handleSubmit}>Submit link</button>
      </form>
    );
  }
}

export default App;
