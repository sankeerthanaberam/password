import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

import InformationItem from './InformationItem'

class App extends Component {
  state = {
    websiteName: '',
    password: '',
    userName: '',
    InformationList: [],
    websiteSearch: '',
  }

  onChangeWebsite = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  deleteItem = id => {
    const {InformationList} = this.state
    const filteredData = InformationList.filter(
      eachObject => eachObject.id !== id,
    )

    this.setState({InformationList: filteredData})
  }

  addInformation = event => {
    event.preventDefault()

    const {websiteName, password, userName} = this.state

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
  }

  onChangeSearch = event => {
    this.setState({websiteSearch: event.target.value})
  }

  render() {
    const {
      websiteName,
      password,
      userName,
      InformationList,
      websiteSearch,
    } = this.state
    console.log(InformationList)
    const searchPasswords = InformationList.filter(eachInformation =>
      eachInformation.websiteName
        .toLowerCase()
        .includes(websiteSearch.toLowerCase()),
    )

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
        <div className="password-showing-container">
          <div className="search-count-password-container">
            <div className="display-row">
              <h1 className="password-heading">Your Passwords</h1>
              <p type="button" className="no-of-passwords">
                {InformationList.length}
              </p>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
            />
            <input
              type="search"
              value={websiteSearch}
              placeholder="Search"
              onChange={this.onChangeSearch}
              className="search-website-input"
            />
          </div>
          <hr />
          <div className="list-of-passwords">
            <div className="display-end">
              <input type="checkbox" id="checkBox" />
              <label htmlFor="checkBox">Show Passwords</label>
            </div>
            {InformationList.length === 0 ? (
              <div className="display-center">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="nopassword-img"
                />
                <p>No Passwords</p>
              </div>
            ) : (
              <ul>
                {searchPasswords.map(eachObject => (
                  <InformationItem
                    key={eachObject.id}
                    InformationDetails={eachObject}
                    deleteItem={this.deleteItem}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
