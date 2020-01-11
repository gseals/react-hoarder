import React from 'react';

import './SingleStuff.scss';

import itemsData from '../../../helpers/data/itemsData';
import SingleItem from '../../shared/SingleItem/SingleItem';
import authData from '../../../helpers/data/authData';

class SingleStuff extends React.Component {
  state = {
    item: [],
  }

  getSingleItemData = (itemId) => {
    itemsData.getSingleItem(itemId)
      .then((item) => this.setState({ item }))
      .catch((err) => console.error('error in get items'));
  }

  componentDidMount() {
    this.getSingleItemData();
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleStuff">
        <h1>Single Stuff</h1>
        <div className="item d-flex flex-wrap"></div>
        <h1>{item.itemName}</h1>
        <p>{item.itemDescription}</p>
        </div>
    );
  }
}

export default SingleStuff;
