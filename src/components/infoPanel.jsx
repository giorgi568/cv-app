/* eslint-disable react/prop-types */
import { BasicInfoForm, EducationForm, WorkExperienceForm, SkillsForm } from "./fieldsets"

export default function InfoPanel({toggleOngoing, edu, handleEduDelete, updateInputs}) {
  return (
    <div className="infoPanel">
    <form action="getInformation" className="form" id="form">

    <BasicInfoForm></BasicInfoForm>

    {edu.map((obj, index) =>
      <EducationForm key={obj.id} toggleOngoing={toggleOngoing} edu={obj} index={index} handleEduDelete={handleEduDelete} updateInputs={updateInputs}></EducationForm>
    )}

    <WorkExperienceForm></WorkExperienceForm>
    
    <SkillsForm></SkillsForm>
   
    <input type="submit" id="submit" value="Submit" />

    </form>
    </div>
  )
}