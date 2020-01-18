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
    const { itemPathId } = this.props.match.params;
    if (itemPathId) {
      itemsData.getSingleItem(itemPathId)
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
    const { itemPathId } = this.props.match.params;
    const newItem = {
      itemName: this.state.itemName,
      itemImage: this.state.itemImage,
      itemDescription: this.state.itemDescription,
      uid: authData.getUid(),
    };
    itemsData.editItemData(itemPathId, newItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('error from save item', err));
  }

  render() {
    const { itemName, itemImage, itemDescription } = this.state;

    return (
      <form className="Edit col-6 m-auto">
       <div className="form-group">
         <h3><label htmlFor="item-name-edit">Update Name</label></h3>
         <input
         type="text"
         className="form-control"
         id="board-name"
         placeholder="Update Name"
         value={itemName}
         onChange={this.itemNameChange}
        />
        <div className="form-group">
          <h3><label htmlFor="item-image-edit">Update Image</label></h3>
          <input
          type="text"
          className="form-control"
          id="item-image-edit"
          placeholder="Update Image"
          value={itemImage}
          onChange={this.itemImageChange}
          />
          <div className="form-group">
            <h3><label htmlFor="item-description-edit">Update Item Description</label></h3>
            <input
            type="text"
            className="form-control"
            id="item-description-edit"
            placeholder="Update Item Description"
            value={itemDescription}
            onChange={this.itemDescriptionChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.editItemEvent}>Save</button>
        </div>
       </div>
      </form>
    );
  }
}

export default Edit;
