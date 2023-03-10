import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

class App extends Component {
  state = {websiteName: '', password: '', userName: '', InformationList: []}

  onChangeWebsite = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  addInformation = event => {
    event.preventDefault()

    const {websiteName, password, userName, InformationList} = this.state

    const newContent = {
      id: uuidv4(),
      websiteName,
      password,
      userName,
    }

    this.setState(prevState => ({
      InformationList: [...prevState.InformationList, newContent],
      websiteName: '',
      password: '',
      userName: '',
    }))

    console.log(newContent)
    console.log(InformationList)
  }

  render() {
    const {websiteName, password, userName} = this.state
    return (
      <div className="password-manager-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="password-manager-logo"
        />
        <div className="password-adding-container">
          <div className="password-entering-box">
            <h1 className="new-password-heading">Add New Password</h1>
            <form onSubmit={this.addInformation}>
              <div className="display-row">
                <div className="website-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="website-logo"
                  />
                </div>
                <input
                  type="text"
                  value={websiteName}
                  placeholder="Enter Website"
                  className="website-input"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="display-row">
                <div className="website-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="website-logo"
                  />
                </div>
                <input
                  type="text"
                  value={userName}
                  placeholder="Enter UserName"
                  className="website-input"
                  onChange={this.onChangeUserName}
                />
              </div>
              <div className="display-row">
                <div className="website-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="website-logo"
                  />
                </div>
                <input
                  type="password"
                  className="website-input"
                  value={password}
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="display-btn-end">
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
      </div>
    )
  }
}

export default App
