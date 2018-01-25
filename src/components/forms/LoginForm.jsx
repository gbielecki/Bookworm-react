/* eslint linebreak-style: ["error", "windows"] */
import PropTypes from 'prop-types';
import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import MessageHeader from 'semantic-ui-react/dist/commonjs/collections/Message/MessageHeader';

class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    };

    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });   
        if(Object.keys(errors).length === 0) {
            this.setState({loading: true});
            console.log(this.props);
            this.props.submit(this.state.data)
            .catch(err=> this.setState({errors: err.response.data.errors, loading: false}))
        }
    }

    validate = (data) => {
        const errors ={};

        if(!data.password) errors.password = "Can't be blank";
        if(!Validator.isEmail(data.email)) errors.email = "Invalid email";

        return errors;
    }

    render () {
        const { data, errors, loading } = this.state;
        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
            {errors.global 
                && <Message negative>
                    <MessageHeader>Something went wrong.
                    </MessageHeader>
                </Message>}
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="example@example.com" 
                    value={data.email} onChange={this.onChange}/>
                </Form.Field>
                {errors.email && <InlineError text={errors.email}/>}
                <Form.Field  error={!!errors.password}>
                    <label htmlFor="password">Email</label>
                    <input type="password" id="password" name="password" placeholder="password" 
                    value={data.password} onChange={this.onChange}/>
                </Form.Field>
                {errors.password && <div><InlineError text={errors.password}/></div>}
                <Button primary>Login</Button>
            </Form>
        )
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;
