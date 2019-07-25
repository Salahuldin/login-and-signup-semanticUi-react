import React, { Component } from 'react'
import { Button, Checkbox, Form, Segment,Grid,Header,Advertisement } from 'semantic-ui-react';


export default class SignUp extends Component {
    constructor(props){
        super(props);

    }
    redirect = (btn) => {
        console.log(`${btn} button click event called`);
        this.props.history.push(btn);
    }

    render() {
        return (
            <div>
                <Grid centered columns={3}>
                    <Grid.Column>   
                        <Form>
                            <Segment>
                                <Form.Field>
                                    <Header as='h1'>Sign Up</Header>
                                </Form.Field><br></br>
                                <Form.Field>
                                    <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input icon='mail' iconPosition='left' label='Email' placeholder='Email' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input icon='lock' iconPosition='left' label='Password' type='password' placeholder='Password' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input icon='lock' iconPosition='left' label='Repeat Password' type='password' placeholder='Confirm Password' />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox label='I agree to the terms and conditions' />
                                </Form.Field><br></br>
                                <Form.Field>
                                    <Button.Group>
                                        <Button positive  onClick={() => this.redirect("signup")}>SignUp</Button>
                                        <Button.Or />
                                        <Button onClick={() => this.redirect("/")}>Login</Button>
                                    </Button.Group>
                                </Form.Field>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
