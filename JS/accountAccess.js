import React, {Component} from ("react");

export default class AccountAccess extends Component {
    state = {
        email: "",
        username: "",
        password: ""
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            [e.target.email.name]: [e.target.email.value],
            [e.target.username.name]: [e.target.username.value],
            [e.target.password.name]: [e.target.password.value]
        })
    }

    render() {
        return (
            <form id="account-access" handleSubmit={this.handleSubmit}>
                <h3>Create An Account</h3>
                <input type="text" placeholder="email"></input>
                <input type="text" placeholder="username"></input>
                <input type="password" placeholder="password"></input>
                <button type="submit">Submit</button>
            </form>
        )
    }
}