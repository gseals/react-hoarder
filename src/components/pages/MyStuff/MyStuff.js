import React from 'react';
import { Link } from 'react-router-dom';
import SingleStuff from '../SingleStuff/SingleStuff';
import './MyStuff.scss';

class MyStuff extends React.Component {
  render() {
    const boardId = '12345';
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <Link className="btn btn-secondary" to={`/stuff/${boardId}/edit`}>Edit</Link>
        <Link className="btn btn-primary" to={`/stuff/${boardId}`}>Single</Link>
        <SingleStuff />
      </div>
    );
  }
}

export default MyStuff;
