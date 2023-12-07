import { useState } from 'react'
import './styles/App.css'
import InfoPanel from './components/infoPanel'
import { v4 as uuidv4 } from 'uuid'

function App() {
  //state handling for education panel
  const [edu, setEdu] = useState(
    [
    {institution: false,
    degree: false, 
    startingYear: false, 
    ongoing: false, 
    graduatingYear: false,
    id: uuidv4()}
    ]
  );
  const toggleOngoing = (e, index) => {
    // console.log(index);
    setEdu((prevEdu) => {
      const updatedEdu = [...prevEdu];
      updatedEdu[index] = {
        ...updatedEdu[index],
        ongoing: e.target.checked
      };
      return updatedEdu;
    });
  }
  const handleEduDelete = (index) => {
    setEdu((prevEdu) => {
      const updatedEdu = [...prevEdu];
      updatedEdu.splice(index, 1);
      return updatedEdu
    })
  };
  const updateInputs = (index, property, e) => {
    setEdu((prevEdu) => {
      const updatedEdu = [...prevEdu];
      updatedEdu[index] = {
        ...updatedEdu[index],
        [property]: e.target.value
      };
      return updatedEdu
    })
  }

  //state handling for work panel
  const [workExp, setWorkExp] = useState(
    [
    {workplace: false,
    position: false, 
    startingYear: false, 
    ongoing: false, 
    endYear: false,
    id: uuidv4()}
    ]
  );
  const toggleOngoingWork = (e, index) => {
    setWorkExp((prevWorkExp) => {
      const updatedWorkExp = [...prevWorkExp];
      updatedWorkExp[index] = {
        ...updatedWorkExp[index],
        ongoing: e.target.checked
      };
      return updatedWorkExp;
    });
  }
  const handleWorkDelete = (index) => {
    setWorkExp((prevWorkExp) => {
      const updatedWorkExp = [...prevWorkExp];
      updatedWorkExp.splice(index, 1);
      return updatedWorkExp
    })
  };
  const updateInputsWork = (index, property, e) => {
    setWorkExp((prevWorkExp) => {
      const updatedWorkExp = [...prevWorkExp];
      updatedWorkExp[index] = {
        ...updatedWorkExp[index],
        [property]: e.target.value
      };
      return updatedWorkExp
    })
  }

  // state handling for basic info panel
  const [basicInfo, setBasicInfo] = useState(
    {firstName: false,
    lastName: false, 
    email: false, 
    phoneNumber: false, 
    description: false,
    id: uuidv4()}
  );
  //not using id on this state
  const updateInputsBasic = (property, e) => {
    console.log(4444, e)
    setBasicInfo((prevBasicInfo) => ({
      ...prevBasicInfo,
      [property]: e.target.value
    }));
  }

  //state handling for skills
  const [skillList, setSkillList] = useState([]);
  const deleteSkill = (index) => {
    const newArray = [...skillList];
    newArray.splice(index, 1);
    setSkillList(newArray);
  }
  const addSkill = (skill) => {
    skill && setSkillList([
      ...skillList,
      skill
    ]);
  }

  return (
    <>
      <div className='navbar'>
        <button className='addEducation' onClick={() => {
          const newArr = [
            ...edu,
            {
              institution: false,
              degree: false,
              startingYear: false,
              ongoing: false,
              graduatingYear: false,
              id: uuidv4()
            }
          ]
          setEdu(newArr);
        }}>add education</button>
        <button className='addWorkExperience' onClick={() => {
          const newArr = [
            ...workExp,
            {
              workplace: false,
              position: false,
              startingYear: false,
              ongoing: false,
              endYear: false,
              id: uuidv4()
            }
          ]
          setWorkExp(newArr);
        }}>add work experience</button>
      </div>
        
      <div className="mainContentWrapper">
        <InfoPanel toggleOngoing={toggleOngoing} edu={edu} handleEduDelete={handleEduDelete} updateInputs={updateInputs}
        toggleOngoingWork={toggleOngoingWork} workExp={workExp} handleWorkDelete={handleWorkDelete} updateInputsWork={updateInputsWork}
        basicInfo={basicInfo} updateInputsBasic={updateInputsBasic} deleteSkill={deleteSkill} addSkill={addSkill} skillList={skillList}></InfoPanel>
        
        <div className="preview">
          <div className="basicInfoPreview">
            <h1>{basicInfo.firstName} {basicInfo.lastName}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
