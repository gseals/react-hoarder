import React from 'react';
import PropTypes from 'prop-types';
import itemShape from '../../../helpers/propz/itemShape';

import './SingleItem.scss';

class SingleItem extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }
}
