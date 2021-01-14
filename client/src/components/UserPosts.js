import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Post from './Post';

const UserPosts = () => {
  const [posts, setPosts] = useState([]);

  const { id } = useParams(); 

  useEffect(() => {
    fetch(`/api/post/getbyuser/${id}`)
    .then(res => res.json())
    .then(data => setPosts(data));  
  }, []);

  return (
    <div className="container">
        <h1>
            {posts[0]?.userProfile.name}
        </h1>
      <div className="row justify-content-center">
        <div className="cards-column">
          {posts.map((post) => (
              <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPosts;