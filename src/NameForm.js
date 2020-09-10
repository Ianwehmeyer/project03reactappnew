import React, { Component } from 'react'

export default class extends Component {

    state = {
        fname: '',
        lname: '',
        email: '',
        comment: '',
    }

    handleChange= event => {
        this.setState({fname: event.target.value})
    };
    handleChangelname= event => {
        this.setState({lname: event.target.value})
    };
    handleChangeComment= event => {
        this.setState({comment: event.target.value})
    };
    handleChangeEmail= event => {
        this.setState({email: event.target.value})
    };

    handleSubmit = () => {
        console.log(this.state)
    }

    render() {
        console.log(this.state.fname)
        console.log(this.state.lname)
        console.log(this.state.email)
        console.log(this.state.comment)
        return (
            <div>
                <h1>Contact Us</h1>
                <p>
                <input value={this.state.fname} onChange={this.handleChange} placeholder="first name"/>
                </p>
                <p>
                <input value={this.state.lname} onChange={this.handleChangelname} placeholder="last name" />
                </p>
                <p>
                    <input value={this.state.email} onChange={this.handleChangeEmail} placeholder="email"/>
                </p>
                <p>
                <textarea value={this.state.comment} onChange={this.handleChangeComment} placeholder="comments" />
                </p>
                <p>
                <button onClick={this.handleSubmit}>Submit</button>
                </p>
            </div>
        )
    }
}
