import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';

const CommentList = ({ comments }) => {
    return (
        <ListGroup>
            {comments.map(comment => (
                <ListGroupItem key={comment.id}>{comment.userProfile.name}: {comment.message}</ListGroupItem>
            ))}
        </ListGroup>
    );
}

export default CommentList;