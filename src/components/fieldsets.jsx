/* eslint-disable react/prop-types */
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
  const [edu, setEdu] = useState(
    {institution: false,
    degree: false, 
    startingYear: false, 
    ongoing: false, 
    graduatingYear: false}
    );

  const toggleOngoing = (e) => {
    e.target.checked ? setEdu({...edu, ongoing: true}) : setEdu({...edu, ongoing: false});
  } 

  return(
    <fieldset className="educationForm">
      <legend>Education</legend>

      <UserInput text={"University/Institution:"} id="institution"> </UserInput>

      <UserInput text={"Degree:"} id="degree"> </UserInput>

      <UserInput type="month" text={"Starting Year:"} id="startingYear"> </UserInput>

      <UserInput type="checkbox" text={"On-going"} id="on-going" toggleOngoing={toggleOngoing}> </UserInput>
      
      { !edu.ongoing && <UserInput type="month" text={"Graduating Year:"} id="graduatingYear"> </UserInput>}        
    </fieldset>
  )
}

function WorkExperienceForm() {
  const [workExp, setWorkExp] = useState(
    {position: false,
    workplace: false, 
    startingYear: false, 
    ongoing: false, 
    endYear: false}
    );
  const toggleOngoing = (e) => {
    e.target.checked ? setWorkExp({...workExp, ongoing: true}) : setWorkExp({...workExp, ongoing: false});
  } 
  return (
    <fieldset className="workExperienceForm">
      <legend> Work Experience </legend>

      <UserInput text={"Title/Position:"} id="position"> </UserInput>

      <UserInput text={"Workplace:"} id="workplace"> </UserInput>

      <UserInput type="month" text={"Starting Year:"} id="startingYearWork"> </UserInput>

      <UserInput type="checkbox" text={"On-going"} id="on-goingWork" toggleOngoing={toggleOngoing} > </UserInput>

      {!workExp.ongoing && <UserInput type="month" text={"End Year:"} id="endYear"> </UserInput>}
      
    </fieldset>
  )
}

function SkillsForm() {
  const [skillList, setSkillList] = useState([]);
  let skill;
  const deleteSkill = (index) => {
    const newArray = [...skillList];
    newArray.splice(index, 1);
    setSkillList(newArray);
  }

  return(
    <fieldset>
      <legend> Skills </legend>
      
      <ul>
        {skillList.map((skill, index) => {
          return (
          <li key={uuidv4()} > 
          <p>{skill}
          <DelBtn value={'Delete'} index={index} cb={deleteSkill}></DelBtn>
          </p>
          </li>
          );
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

function DelBtn({index, cb, value}) {
  return (
    <button className="skillDelBtn" onClick={(e)=> {
      e.preventDefault();
      cb(index);
    }}>
      {value}
    </button>
  )
}

export {BasicInfoForm, EducationForm, WorkExperienceForm, SkillsForm};