import React from 'react';
import SingleItem from '../../shared/SingleItem/SingleItem';
import itemsData from '../../../helpers/data/itemsData';
import authData from '../../../helpers/data/authData';
import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  getItems = (uid) => {
    itemsData.getItemsByUid(authData.getUid())
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('error in get items'));
  }

  componentDidMount() {
    this.getItems();
  }

  deleteItem = (itemId) => {
    itemsData.deleteItemData(itemId)
      .then(() => this.getItems())
      .catch((err) => console.error('error from deleting items', err));
  }

  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <div className="item container d-flex flex-wrap">
          { this.state.items.map((item) => <SingleItem key={item.id} item={item} deleteItem={this.deleteItem} />)}
        </div>
      </div>
    );
  }
}

export default MyStuff;
