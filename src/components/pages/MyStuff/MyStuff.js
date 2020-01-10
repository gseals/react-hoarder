import React from 'react';
import { Link } from 'react-router-dom';
import './MyStuff.scss';

class MyStuff extends React.Component {
  render() {
    const boardId = '12345';
    return (
      <div className="MyStuff">
        <h1>My Stuff Page</h1>
        <Link className="btn btn-primary" to={`/stuff/${boardId}`}>Single</Link>
        <Link className="btn btn-secondary" to={`/stuff/${boardId}/edit`}>Edit</Link>
      </div>
    );
  }
}

export default MyStuff;
