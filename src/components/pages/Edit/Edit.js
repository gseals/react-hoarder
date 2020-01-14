import React from 'react';

import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';
import './Edit.scss';

class Edit extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    if (itemId) {
      itemsData.getSingleItem(itemId)
        .then((request) => {
          const item = request.data;
          this.setState({ itemName: item.itemName, itemImage: item.itemImage, itemDescription: item.itemDescription });
        })
        .catch((err) => console.error('error with get single item', err));
    }
  }

  itemNameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  itemImageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  itemDescriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  editItemEvent = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
    const newItem = {
      itemName: this.state.itemName,
      itemImage: this.state.itemImage,
      itemDescription: this.state.itemDescription,
      uid: authData.getUid(),
    };
    itemsData.editItemData(itemId, newItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('error from save item', err));
  }

  render() {
    return (
      <div className="Edit">
        <h1>Edit</h1>
      </div>
    );
  }
}

export default Edit;
