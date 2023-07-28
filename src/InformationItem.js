const InformationItem = props => {
  const {InformationDetails, deleteItem} = props
  const {websiteName, password, userName, id} = InformationDetails

  const deletePassword = () => deleteItem(id)

  return (
    <li className="information-list">
      <buttun>{websiteName[0].toUpperCase()}</buttun>
      <div>
        <p>{websiteName}</p>
        <p>{userName}</p>
        <p>{password}</p>
      </div>
      <button type="button" data-testid="delete" onClick={deletePassword}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default InformationItem
