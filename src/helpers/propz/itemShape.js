import PropTypes from 'prop-types';

const itemShape = PropTypes.shape({
  itemDescription: PropTypes.string.isRequired,
  itemImage: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { itemShape };
