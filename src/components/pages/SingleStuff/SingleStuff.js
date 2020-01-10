import React from 'react';

import './SingleStuff.scss';

import itemsData from '../../../helpers/data/itemsData';


class SingleStuff extends React.Component {
  render() {
    const { boardId } = this.props.match.params;
    return (
      <div className="SingleStuff">
        <h1>Single Stuff</h1>
        {/* <h2>Current Board Id is {boardId}</h2> */}
      </div>
    );
  }
}

export default SingleStuff;
