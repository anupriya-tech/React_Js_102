import React from 'react';
import ReactDOM from 'react-dom';

//all list item in react should have key
//Warning: Each child in a list should have a unique "key" prop.

const mylist = [1,2,3,4,5];
const listelements = mylist.map( (i) =>
<li>
    {i}
  </li>
  /* <li key={i.toString()}>
    {i}
  </li> */
);

ReactDOM.render(
  <ul>{listelements}</ul>
  ,document.getElementById("root") );