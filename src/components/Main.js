import React, { Component } from 'react';

import Meme from './Meme';

export default class Main extends Component {
  render() {
    const neki = this.props;
    console.log(neki);
    const {user, memes} = this.props;
    console.log(memes)
    console.log(user)
    return (
      <div className="container main-content">
        <div className="grid">
          {memes.map((meme) => 
            <Meme key={meme.id} meme={meme} />
          )}
        </div>
      </div>
    );
  }
}
