import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="container">
            <Form>
                <Form.Group className="mb-3 b-flex-column" controlId="formBasicUser">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control type="text" placeholder="user"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Link to="/signup" className="signup">sign up</Link>
            </Form>
        </div>
    )
}

export default Login;
