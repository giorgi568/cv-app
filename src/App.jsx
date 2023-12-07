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

  return (
    <>
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
      
      <InfoPanel toggleOngoing={toggleOngoing} edu={edu} handleEduDelete={handleEduDelete} updateInputs={updateInputs} 
      toggleOngoingWork={toggleOngoingWork} workExp={workExp} handleWorkDelete={handleWorkDelete} updateInputsWork={updateInputsWork}></InfoPanel>
    </>
  )
}

export default App
