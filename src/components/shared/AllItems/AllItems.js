import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import itemShape from '../../../helpers/propz/itemShape';

import './AllItems.scss';

class AllItems extends React.Component {
  static propTypes = {
    items: itemShape.itemShape,
  }

  render() {
    const { items } = this.props;
    return (
      <div className="AllItems col-4 mb-3">
        <div className="card">
          <div className="card-body">
          <img src={items.itemImage} className="card-img-top" alt=""/>
            <h5 className="card-title">{items.itemName}</h5>
            <Link className="btn btn-primary" to={`/stuff/12345/${items.id}`}>See more</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AllItems;
