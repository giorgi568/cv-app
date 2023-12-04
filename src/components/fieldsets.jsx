import { UserInput } from "./simpleInputs"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
function BasicInfoForm() {
  return (
    <fieldset className="basicInfoForm">
      <legend>Basic Info</legend>

      <UserInput text={"First Name:*"} id="firstName"> </UserInput>
            
      <UserInput text={"Last Name:*"} id="lastName"> </UserInput>

      <UserInput text={"Email:*"} id="email"> </UserInput>

      <UserInput text={"Phone Number:*"} id="phoneNumber"> </UserInput>

      <label htmlFor="description">Write Something About You Below*:</label>
      <textarea name="description" id="description" cols="30" rows="10" required></textarea>
    </fieldset>
  )
}

function EducationForm() {
  return(
    <fieldset className="educationForm">
      <legend>Education</legend>

      <UserInput text={"University/Institution:"} id="institution"> </UserInput>

      <UserInput text={"Degree:"} id="degree"> </UserInput>

      <UserInput type="month" text={"Starting Year:"} id="startingYear"> </UserInput>

      <UserInput type="checkbox" text={"On-going"} id="on-going"> </UserInput>
      <UserInput type="month" text={"Graduating Year:"} id="graduatingYear"> </UserInput>        
    </fieldset>
  )
}

function WorkExperienceForm() {
  return (
    <fieldset className="workExperienceForm">
      <legend> Work Experience </legend>

      <UserInput text={"Title/Position:"} id="position"> </UserInput>

      <UserInput text={"Workplace:"} id="workplace"> </UserInput>

      <UserInput type="month" text={"Starting Year:"} id="startingYearWork"> </UserInput>

      <UserInput type="checkbox" text={"On-going"} id="on-goingWork"> </UserInput>
      <UserInput type="month" text={"End Year:"} id="endYear"> </UserInput>
      
    </fieldset>
  )
}

function SkillsForm() {
  const [skillList, setSkillList] = useState([]);
  let skill;

  return(
    <fieldset>
      <legend> Skills </legend>

      <ul>
        {skillList.map((skill) => {
          return (<li key={uuidv4()}> {skill} </li>);
        })}
      </ul>

      <div className="userInputWrapper">
        <label htmlFor="addSkill">skill:</label>
        <input type="text" id="addSkill" required  onChange={(e) => skill = e.target.value}/>
        <button onClick={(e) => {
          e.preventDefault();
          skill && setSkillList([
            ...skillList,
            skill
          ]);
          document.getElementById('addSkill').value = '';
          console.log(skillList);
        }}>
          Add</button>
      </div>
            
    </fieldset>
  )
}


export {BasicInfoForm, EducationForm, WorkExperienceForm, SkillsForm};