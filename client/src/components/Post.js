import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody } from "reactstrap";
import CommentList from "./CommentList";

const Post = ({ post }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: <Link to={`/users/${post.userProfile.id}`}>{post.userProfile.name}</Link></p>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <Link to={`/posts/${post.id}`}>
          <strong>{post.title}</strong>
        </Link>
        <p>{post.caption}</p>
      </CardBody>
      <CommentList comments={post.comments} />
    </Card>
  );
};

export default Post;
