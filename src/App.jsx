import { useState } from 'react'
import './styles/App.css'
import InfoPanel from './components/infoPanel'
import { v4 as uuidv4 } from 'uuid'

function App() {
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
    console.log(edu)
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
      <InfoPanel toggleOngoing={toggleOngoing} edu={edu} handleEduDelete={handleEduDelete} updateInputs={updateInputs}></InfoPanel>      
    </>
  )
}

export default App
