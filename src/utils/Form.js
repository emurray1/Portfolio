import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Form extends Component {
    constructor () {
        super();        
        this.state = {
            name: '',
            email: '',
            phone: '',
            multiline: ''
        };
        this.handleChange = this.handleChange.bind(this);  
    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <form noValidate>
                <TextField 
                    id="standard-full-width"
                    label="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />    
            </form>
        )
    }    
}

export default Form;