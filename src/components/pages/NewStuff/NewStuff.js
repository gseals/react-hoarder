import React from 'react';

import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';
import './NewStuff.scss';

class NewStuff extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
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

  saveItemEvent = (e) => {
    e.preventDefault();
    const newItem = {
      itemName: this.state.itemName,
      itemImage: this.state.itemImage,
      itemDescription: this.state.itemDescription,
      uid: authData.getUid(),
    };
    itemsData.saveItem(newItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('error from save item', err));
  }

  render() {
    const { itemName, itemImage, itemDescription } = this.state;
    return (
      <form className="NewStuff">
        <div className="form-group">
          <label htmlFor="item-name">Item Name</label>
          <input
          type="text"
          className="form-control"
          id="item-name"
          placeholder="Enter item name"
          value={itemName}
          onChange={this.itemNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="item-image">Item Image</label>
          <input
          type="text"
          className="form-control"
          id="item-image"
          placeholder="Enter item image"
          value={itemImage}
          onChange={this.itemImageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="item-description">Item Description</label>
          <input
          type="text"
          className="form-control"
          id="item-description"
          placeholder="Enter item description"
          value={itemDescription}
          onChange={this.itemDescriptionChange}
          />
        </div>
    <button className="btn btn-success" onClick={this.saveItemEvent}>Save</button>
      </form>
    );
  }
}

export default NewStuff;
