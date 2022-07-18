import React from "react"

const regex = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
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
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={this.handleEmailChange} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword" onChange={this.handlePasswordChange}/>
                      </div>
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" onChange={this.handleRememberMeChange}/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  </>
                : <h1 className="text-center">bravo l'epad !</h1>
            } 
            
          </section>
    )
  }
}

export default App