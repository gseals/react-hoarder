import React from 'react';

import './SingleStuff.scss';

import itemsData from '../../../helpers/data/itemsData';
import SingleItem from '../../shared/SingleItem/SingleItem';
import authData from '../../../helpers/data/authData';

class SingleStuff extends React.Component {
  state = {
    items: {},
    item: [],
  }

  getItemData = (uid) => {
    itemsData.getItemsByUid(authData.getUid())
      .then((item) => this.setState({ item }))
      .catch((err) => console.error('error in get items'));
  }

  componentDidMount() {
    const { itemsId } = this.props.match.params;
    itemsData.getSingleItem(itemsId)
      .then((response) => {
        this.setState({ items: response.data });
        this.getItemData(itemsId);
      })
      .catch((err) => console.error('error in get single board', err));
  }

  render() {
    const { items } = this.state;
    return (
      <div className="SingleStuff">
        <h1>{items.itemName}</h1>
        <p>{items.itemDescription}</p>
        <div className="item d-flex flex-wrap">
          { this.state.item.map((ite) => <SingleItem key={ite.id} ite={ite}/>)}
        </div>
      </div>
    );
  }
}

export default SingleStuff;
