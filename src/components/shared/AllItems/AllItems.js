import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import itemShape from '../../../helpers/propz/itemShape';

import './AllItems.scss';

class AllItems extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    const { boardId } = this.props.match.params;
    return (
      <div className="AllItems col-4 mb-3">
        <div className="card">
          <div className="card-body">
          <img src={item.itemImage} className="card-img-top" alt=""/>
            <h5 className="card-title">{item.itemName}</h5>
            <Link className="btn btn-primary" to={`/stuff/:boardId/${item.id}`}>See more</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AllItems;
