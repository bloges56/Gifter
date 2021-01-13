import React, { useEffect, useState } from 'react';
import { Label, Input } from "reactstrap"
import Post from './Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState("");

  const handleInputControl = event => {
    setSearch(event.target.value)
}

  useEffect(() => {
      if(search.trim() === "")
      {
        fetch('/api/post')
        .then(res => res.json())
        .then(data => setPosts(data));
      }
      else
      {
          fetch(`/api/post/search?q=${search}`)
          .then(res => res.json())
          .then(data => setPosts(data))
      }
    
  }, [search]);

  return (
    <div className="container">
        <Label for="search">Search</Label>
        <Input type="text" name="search" id="search" value={search} onChange={handleInputControl} required></Input>
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

export default PostList;