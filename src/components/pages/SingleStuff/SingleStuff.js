import React from 'react';
import { Link } from 'react-router-dom';

import './SingleStuff.scss';

import itemsData from '../../../helpers/data/itemsData';

class SingleStuff extends React.Component {
  state = {
    item: [],
  }

  getSingleItemData = (itemId) => {
    itemsData.getSingleItem(itemId)
      .then((item) => {
        this.setState({ item: item.data });
      })
      .catch((err) => console.error('error in get items'));
  }

  componentDidMount() {
    this.getSingleItemData(this.props.match.params.itemPathId);
  }

  handleDelete = (e) => {
    e.preventDefault();
    itemsData.deleteItemData(this.props.match.params.itemPathId)
      .then((response) => {
        this.props.history.push('/stuff/');
      })
      .catch((err) => console.error('error from from deleting items', err));
  }

  render() {
    const { item } = this.state;
    const { itemPathId } = this.props.match.params;
    return (
      <div className="SingleStuff container col-6 m-auto">
        <h1>Single Stuff</h1>
        <div className="item text-center">
        <div className="card">
        <div className="card-body">
        <img src={item.itemImage} className="card-img-top" alt=""/>
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
          <Link className="btn btn-secondary" to={`/stuff/${itemPathId}/edit`}>Update</Link>
          <button className="btn btn-danger" onClick={this.handleDelete}>Presto, deleto</button>
          </div>
          </div>
        </div>
        </div>
    );
  }
}

export default SingleStuff;
