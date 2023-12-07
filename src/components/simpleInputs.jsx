/* eslint-disable react/prop-types */
function UserInput({ type, id, text, cb, property, index}) {
return (
    <div className="userInputWrapper">
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} onInput={(e) => {
        index ? cb(index, property, e) : cb(property, e)
        }}/>
    </div>
  )
}

UserInput.defaultProps = {
  type : 'text',
}

function OngoingInput({ type, id, text, toggleOngoing, index}) {
  return (
    <div className="userInputWrapper">
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} onChange={(e) => toggleOngoing(e, index)}/>
    </div>
  )
}
OngoingInput.defaultProps = {
  type : 'text',
}
export {UserInput, OngoingInput}