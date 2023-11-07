import React from 'react';
import {comments} from './commentData.js';
import Card from "./Card.js";

function App() {
  return (
    <div>
      {
        comments.map(comment => <Card commentObject={comment} />)
      }
    </div>
  );
}

export default App;