import React from 'react';
import ReactDOM from 'react-dom';

const posts = [
  {id:101,title:"First post", content:"Content from first post"},
  {id:102,title:"Second post", content:"Content from second post"}
];

function Blog(props){
  const sideBar = (
    <ul>
      {props.posts.map(
        (post) =>
      <li key={post.id}>
        {post.title}
      </li>
      )}
    </ul>
  );

  const content = props.posts.map(
    (post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  return(
    <div>
      {sideBar}
      <hr />
      {content}
    </div>
  );
}

ReactDOM.render(
  <Blog posts={posts}/>
  ,document.getElementById("root") );