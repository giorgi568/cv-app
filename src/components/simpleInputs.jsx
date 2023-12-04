/* eslint-disable react/prop-types */
function UserInput({ type, id, required, text}) {
  return (
    <div className="userInputWrapper">
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} required={required}/>
    </div>
  )
}

UserInput.defaultProps = {
  type : 'text',
  required : true
}

export {UserInput}