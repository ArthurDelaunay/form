import React from "react"

const regex = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
    regex.test(e.target.value) && this.setState({emailIsValid: true})
      // : this.setState({emailIsValid: false})
    // console.log(this.state.emailIsValid)
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value}, () => {
      (e.target.value.length > 5) && this.setState ({passwordIsValid: true})
    })
  }

  handleRememberMeChange = (e) => {
    this.setState({rememberMe: !this.state.rememberMe})
  }

  handleFirstNameChange = (e) => {
    this.setState({firstName: e.target.value})
  }

  handleLastNameChange = (e) => {
    this.setState({lastName: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault((this.state.emailIsValid && this.state.passwordIsValid) && this.setState({isSubmitted: true}))
  }

  render() {
     
      return (  
          <section className="m-5">
            {!this.state.isSubmitted 
                ? <>
                    <h1 className="text-center">Login</h1>
                    <form onSubmit={this.handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="inputFirstName" className="form-label">First Name</label>
                        <input type="text" className={`form-control ${(this.state.firstName.length > 2) ? "is-valid" : "is-invalid"}`} id="inputFirstName" onChange={this.handleFirstNameChange} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="inputLastName" className="form-label">Last Name</label>
                        <input type="text" className={`form-control ${(this.state.lastName.length > 3) ? "is-valid" : "is-invalid"}`} id="inputLastName" onChange={this.handleLastNameChange} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email address</label>
                        <input type="email" className={`form-control ${this.state.emailIsValid ? "is-valid" : "is-invalid"}`} id="inputEmail" onChange={this.handleEmailChange} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" className={`form-control ${this.state.passwordIsValid ? "is-valid" : "is-invalid"}`} id="inputPassword" onChange={this.handlePasswordChange}/>
                      </div>
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="checkRememberMe" onChange={this.handleRememberMeChange}/>
                        <label className="form-check-label" htmlFor="checkRememberMe">Remember me</label>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  </>
                : <h1 className="text-center">bravo {this.state.firstName} {this.state.lastName} !</h1>
            } 
            
          </section>
    )
  }
}

export default App