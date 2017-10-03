import React, { Component } from 'react'

import { Link } from 'react-router-dom'


export default class Login extends React.Component  {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      // ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick (e) {
    e.preventDefault()
    const { username, password } = this.state
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    this.props.loginUser(creds, () => document.location = '/#/accounts')
  }

  render () {
    return (
      <form className="fromPadding" onSubmit={this.handleClick} >
        <p><input name='username' onChange={this.handleChange} placeholder='Username' /></p>
        <p><input type='password' name='password' onChange={this.handleChange} placeholder='Password' /></p>
        <button type="submit" className="NoLeftButton loneButton">Login</button>
      </form>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginUser: (creds, cb) => {
//       return dispatch(loginUser(creds, cb))
//     }
//   }
// }
//
// export default connect(null, mapDispatchToProps)(LoginForm)
