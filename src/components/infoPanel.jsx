import { BasicInfoForm, EducationForm, WorkExperienceForm, SkillsForm } from "./fieldsets"

export default function InfoPanel() {
  return (
    <div className="infoPanel">
    <form action="getInformation" className="form" id="form">

    <BasicInfoForm></BasicInfoForm>

    <EducationForm></EducationForm>

    <WorkExperienceForm></WorkExperienceForm>
    
    <SkillsForm></SkillsForm>
   
    <input type="submit" id="submit" value="Submit" />

    </form>
    </div>
  )
}