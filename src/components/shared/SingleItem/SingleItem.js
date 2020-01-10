import React from 'react';
import PropTypes from 'prop-types';
import itemShape from '../../../helpers/propz/itemShape';

import './SingleItem.scss';

class SingleItem extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    return (
      <div className="AllItems col-4 mb-3">
      <div className="card">
        <div className="card-body">
        <img src={item.itemImage} className="card-img-top" alt=""/>
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default SingleItem;
