/* eslint-disable react/prop-types */
function UserInput({ type, id, required, text, toggleOngoing}) {
  return (
    <div className="userInputWrapper">
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} required={required} onChange={(e) => toggleOngoing(e)}/>
    </div>
  )
}

UserInput.defaultProps = {
  type : 'text',
  required : true
}

export {UserInput}