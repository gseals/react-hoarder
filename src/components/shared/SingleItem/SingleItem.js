import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import itemShape from '../../../helpers/propz/itemShape';

import './SingleItem.scss';

class SingleItem extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    deleteItem: PropTypes.func,
  }

  handleDeleteEvent = (e) => {
    e.preventDefault();
    const { deleteItem, item } = this.props;
    deleteItem(item.id);
  }

  render() {
    const { item } = this.props;
    const itemPathId = this.props.item.id;
    return (
      <div className="SingleItem col-4 mb-3">
      <div className="card">
        <div className="card-body">
        <img src={item.itemImage} className="card-img-top" alt=""/>
          <h5 className="card-title">{item.itemName}</h5>
        <button className="btn btn-danger" onClick={this.handleDeleteEvent}>X</button>
        <Link className="btn btn-secondary" to={`/stuff/${itemPathId}/edit`}>Update</Link>
        <Link className="btn btn-primary" to={`/stuff/${itemPathId}`}>View</Link>
        </div>
      </div>
    </div>
    );
  }
}

export default SingleItem;
