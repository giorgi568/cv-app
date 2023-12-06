/* eslint-disable react/prop-types */
function UserInput({ type, id, required, text, cb, property, index}) {
  return (
    <div className="userInputWrapper">
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} required={required} onInput={(e) => cb(index, property, e)}/>
    </div>
  )
}

UserInput.defaultProps = {
  type : 'text',
  required : true
}

function OngoingInput({ type, id, required, text, toggleOngoing, index}) {
  return (
    <div className="userInputWrapper">
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} required={required} onChange={(e) => toggleOngoing(e, index)}/>
    </div>
  )
}
OngoingInput.defaultProps = {
  type : 'text',
  required : true
}
export {UserInput, OngoingInput}