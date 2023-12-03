import { UserInput } from "./simpleInputs"

export default function InfoPanel() {
  return (
    <div className="infoPanel">
    <form action="getInformation" className="form" id="form">

    <fieldset>
      <legend>Basic Info</legend>

      <UserInput text={"First Name:*"} id="firstName"> </UserInput>
            
      <UserInput text={"Last Name:*"} id="lastName"> </UserInput>

      <UserInput text={"Email:*"} id="email"> </UserInput>

      <UserInput text={"Phone Number:*"} id="phoneNumber"> </UserInput>

      <label htmlFor="description">Write Something About You Below*:</label>
      <textarea name="description" id="description" cols="30" rows="10" required></textarea>
    </fieldset>

    
    <fieldset>
      <legend>Education</legend>

      <UserInput text={"University/Institution:"} id="institution"> </UserInput>

      <UserInput text={"Degree:"} id="degree"> </UserInput>

      <UserInput type="month" text={"Starting Year:"} id="startingYear"> </UserInput>

      <UserInput type="checkbox" text={"On-going"} id="on-going"> </UserInput>
      <UserInput type="month" text={"Graduating Year:"} id="graduatingYear"> </UserInput>
      
    </fieldset>

    <fieldset>
      <legend> Work Experience </legend>

      <UserInput text={"Title/Position:"} id="position"> </UserInput>

      <UserInput text={"Workplace:"} id="workplace"> </UserInput>

      <UserInput type="month" text={"Starting Year:"} id="startingYearWork"> </UserInput>

      <UserInput type="checkbox" text={"On-going"} id="on-goingWork"> </UserInput>
      <UserInput type="month" text={"End Year:"} id="endYear"> </UserInput>
      
    </fieldset>

    <fieldset>
      <legend> Skills </legend>

      <label htmlFor="addSkill">add skill:</label>
      <input type="text" id="addSkill" required />
           
    </fieldset>

    <input type="submit" id="submit" value="Submit" />

    </form>
    </div>
  )
}