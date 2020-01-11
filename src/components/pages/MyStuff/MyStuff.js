import React from 'react';
import SingleItem from '../../shared/SingleItem/SingleItem';
import itemsData from '../../../helpers/data/itemsData';
import authData from '../../../helpers/data/authData';
import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  getItems = (uid) => {
    itemsData.getItemsByUid(authData.getUid())
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('error in get items'));
  }

  componentDidMount() {
    this.getItems();
  }

  deleteItem = (itemId) => {
    itemsData.deleteItemData(itemId)
      .then(() => this.getItems())
      .catch((err) => console.error('error from deleting items', err));
  }

  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <div className="item d-flex flex-wrap">
          { this.state.items.map((item) => <SingleItem key={item.id} item={item} deleteItem={this.deleteItem} />)}
        </div>
      </div>
    );
  }
}

export default MyStuff;


// componentDidMount() {
//   const { itemPathId } = this.props.match.params;
//   itemsData.getSingleItem(itemPathId)
//     .then((response) => {
//       this.setState({ items: response.data });
//       this.getItems(itemPathId);
//     })
//     .catch((err) => console.error('error in get single board', err));
// }

// render() {
//   const itemPathId = '12345';
//   return (
//     <div className="MyStuff">
//       <h1>My Stuff</h1>
//       <Link className="btn btn-secondary" to={`/stuff/${itemPathId}/edit`}>Edit</Link>
//       <Link className="btn btn-primary" to={`/stuff/${itemPathId}`}>Single</Link>
//       <SingleItem />
//     </div>
//   );
// }
