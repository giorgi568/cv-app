export default function InfoPanel() {
  return (
    <div className="infoPanel">
    <form action="getInformation" className="form" id="form">

    <fieldset>
      <legend>Basic Info</legend>

      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" required />
      
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" required />


      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="example@mail.com" required />


      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="text" id="phoneNumber" required />

      <label htmlFor="description">Write Something About You</label>
      <textarea name="description" id="description" cols="30" rows="10"></textarea>
    </fieldset>

    <input type="submit" id="submit" value="Submit" />

    </form>
    </div>
  )
}