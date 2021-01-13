import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button, Container, Row, Col } from "reactstrap"

const PostForm = () => {

    const [ post, setPost ] = useState({
        title: "",
        imageUrl: "",
        caption: "",
        userProfileId: 1
    })

    const handleInputControl = event => {
        const newPost = { ...post }
        newPost[event.target.name] = event.target.value
        setPost(newPost)
    }

    const constructPost = () => {
        fetch("api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
    }

    return (
        <Container>
             <Form>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input type="text" name="title" id="title" value={post.title} onChange={handleInputControl} required></Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="imageUrl">Image URL</Label>
                            <Input type="text" name="imageUrl"  id="imageUrl" value={post.imageUrl} onChange={handleInputControl} required></Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="caption">Caption</Label>
                            <Input type="text" name="caption" id="caption" value={post.caption} onChange={handleInputControl}></Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="userProfileId">User Id</Label>
                            <Input type="number" name="userProfileId" id="userProfileId" value={post.userProfileId} onChange={handleInputControl} required></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Button onClick={event => {
                    event.preventDefault()
                    constructPost()
                }}>Add</Button>
            </Form>
        </Container>
       
    )

}

export default PostForm;