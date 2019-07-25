import React, { Component } from 'react';
import { Button, Checkbox, Form, Segment,Grid,Header,Advertisement } from 'semantic-ui-react';

export default class SignIn extends Component {

  redirect = (btn) => {
    console.log(`${btn} button click event called`);
    this.props.history.push(btn);
  }
  render() {
    return (
      <div>
        <Grid centered columns={3}>
          <Grid.Column>
            <Segment>
              <Form>
                <Form.Field>
                  <Header as='h1'>Login</Header>
                </Form.Field><br></br>
                <Form.Field>
                  <Form.Input icon='mail' iconPosition='left' label='Email' placeholder='E-mail Address' />
                </Form.Field>
                <Form.Field>
                  <Form.Input icon='lock' iconPosition='left' label='Password' type='password' placeholder='Password' />
                </Form.Field>
                <Form.Field>
                  <Checkbox label='Remember me' />  
                  <a href='#' style={{float: "right"}}>Forget?</a>
                </Form.Field><br></br>
                <Form.Field>
                  <Button.Group>
                    <Button positive  onClick={() => this.redirect("/")}>Login</Button>
                    <Button.Or />
                    <Button onClick={() => this.redirect("signup")}>SignUp</Button>
                  </Button.Group>
                </Form.Field>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
