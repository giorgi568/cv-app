/* eslint-disable react/prop-types */
import { UserInput, OngoingInput } from "./simpleInputs"
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

function EducationForm({toggleOngoing, edu, index, handleEduDelete, updateInputs}) {
  
  return(
    <fieldset className="educationForm">
      <legend>Education</legend>

      <button className="deleteField" onClick={() => {handleEduDelete(index)}}> delete </button>

      <UserInput text={"University/Institution:"} id={uuidv4()} property={'institution'} cb={updateInputs} index={index}> </UserInput>

      <UserInput text={"Degree:"} id={uuidv4()} property={'degree'} cb={updateInputs} index={index}> </UserInput>

      <UserInput type="month" text={"Starting Year:"} id={uuidv4()} property={'startingYear'} cb={updateInputs} index={index}> </UserInput>

      <OngoingInput type="checkbox" text={"On-going"} id={uuidv4()} toggleOngoing={toggleOngoing} index={index}> </OngoingInput>
      
      { !edu.ongoing && <UserInput type="month" text={"Graduating Year:"} id={uuidv4()} property={'graduatingYear'} cb={updateInputs} index={index}> </UserInput>}        
    </fieldset>
  )
}

function WorkExperienceForm({toggleOngoingWork, workExp, index, handleWorkDelete, updateInputsWork}) {
  
  return (
    <fieldset className="workExperienceForm">
      <legend> Work Experience </legend>

      <button className="deleteField" onClick={() => {handleWorkDelete(index)}}> delete </button>

      <UserInput text={"Workplace:"} id={uuidv4()} property={'workplace'} cb={updateInputsWork} index={index}> </UserInput>

      <UserInput text={"Title/Position:"} id={uuidv4()} property={'position'} cb={updateInputsWork} index={index}> </UserInput>

      <UserInput type="month" text={"Starting Year:"} id={uuidv4()} property={'startingYear'} cb={updateInputsWork} index={index}> </UserInput>

      <OngoingInput type="checkbox" text={"On-going"} id={uuidv4()} toggleOngoing={toggleOngoingWork} index={index} > </OngoingInput>

      {!workExp.ongoing && <UserInput type="month" text={"End Year:"} id={uuidv4()} property={'endYear'} cb={updateInputsWork} index={index}> </UserInput>}
      
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