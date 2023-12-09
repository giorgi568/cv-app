import { useState } from 'react';
import './styles/App.css';
import InfoPanel from './components/infoPanel';
import Preview from './components/preview';
import { v4 as uuidv4 } from 'uuid';

function App() {
  //state handling for education panel
  const [edu, setEdu] = useState([
    {
      institution: 'London State University',
      degree: 'bachelor of law',
      startingYear: '2010/03',
      ongoing: false,
      graduatingYear: '2014/04',
      id: uuidv4(),
    },
  ]);
  const toggleOngoing = (e, index) => {
    // console.log(index);
    setEdu((prevEdu) => {
      const updatedEdu = [...prevEdu];
      updatedEdu[index] = {
        ...updatedEdu[index],
        ongoing: e.target.checked,
      };
      return updatedEdu;
    });
  };
  const handleEduDelete = (index) => {
    setEdu((prevEdu) => {
      const updatedEdu = [...prevEdu];
      updatedEdu.splice(index, 1);
      return updatedEdu;
    });
  };
  const updateInputs = (index, property, e) => {
    setEdu((prevEdu) => {
      const updatedEdu = [...prevEdu];
      updatedEdu[index] = {
        ...updatedEdu[index],
        [property]: e.target.value,
      };
      return updatedEdu;
    });
  };

  //state handling for work panel
  const [workExp, setWorkExp] = useState([
    {
      workplace: 'Facebook',
      position: 'Software Engineer',
      startingYear: '2014-03',
      ongoing: false,
      endYear: '2020-01',
      id: uuidv4(),
    },
  ]);
  const toggleOngoingWork = (e, index) => {
    setWorkExp((prevWorkExp) => {
      const updatedWorkExp = [...prevWorkExp];
      updatedWorkExp[index] = {
        ...updatedWorkExp[index],
        ongoing: e.target.checked,
      };
      return updatedWorkExp;
    });
  };
  const handleWorkDelete = (index) => {
    setWorkExp((prevWorkExp) => {
      const updatedWorkExp = [...prevWorkExp];
      updatedWorkExp.splice(index, 1);
      return updatedWorkExp;
    });
  };
  const updateInputsWork = (index, property, e) => {
    setWorkExp((prevWorkExp) => {
      const updatedWorkExp = [...prevWorkExp];
      updatedWorkExp[index] = {
        ...updatedWorkExp[index],
        [property]: e.target.value,
      };
      return updatedWorkExp;
    });
  };

  // state handling for basic info panel
  const [basicInfo, setBasicInfo] = useState({
    firstName: 'john',
    lastName: 'doe',
    email: 'johndoe@gmail.com',
    phoneNumber: '558 45 36 45',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque modi similique quidem, nesciunt quo itaque atque, illum fuga error adipisci, cum labore culpa? Cumque repudiandae ullam corporis excepturi, soluta dolores cum sint fuga nobis blanditiis velit amet eius cupiditate, necessitatibus aliquid esse aspernatur animi. Aliquid non at quisquam autem tempore!',
    id: uuidv4(),
  });
  //not using id on this state
  const updateInputsBasic = (property, e) => {
    setBasicInfo((prevBasicInfo) => ({
      ...prevBasicInfo,
      [property]: e.target.value,
    }));
  };

  //state handling for skills
  const [skillList, setSkillList] = useState([
    'Writing Scalable Code',
    'Building Awesome Software',
    'Solving Complex Problems',
  ]);
  const deleteSkill = (index) => {
    const newArray = [...skillList];
    newArray.splice(index, 1);
    setSkillList(newArray);
  };
  const addSkill = (skill) => {
    skill && setSkillList([...skillList, skill]);
  };

  return (
    <>
      <div className='navbar'>
        <button
          className='addEducation'
          style={{
            marginBottom: 15 + 'px',
          }}
          onClick={() => {
            const newArr = [
              ...edu,
              {
                institution: false,
                degree: false,
                startingYear: false,
                ongoing: false,
                graduatingYear: false,
                id: uuidv4(),
              },
            ];
            setEdu(newArr);
          }}
        >
          Add Education
        </button>
        <button
          className='addWorkExperience'
          onClick={() => {
            const newArr = [
              ...workExp,
              {
                workplace: false,
                position: false,
                startingYear: false,
                ongoing: false,
                endYear: false,
                id: uuidv4(),
              },
            ];
            setWorkExp(newArr);
          }}
        >
          Add Work Experience
        </button>
      </div>

      <div className='mainContentWrapper'>
        <InfoPanel
          toggleOngoing={toggleOngoing}
          edu={edu}
          handleEduDelete={handleEduDelete}
          updateInputs={updateInputs}
          toggleOngoingWork={toggleOngoingWork}
          workExp={workExp}
          handleWorkDelete={handleWorkDelete}
          updateInputsWork={updateInputsWork}
          basicInfo={basicInfo}
          updateInputsBasic={updateInputsBasic}
          deleteSkill={deleteSkill}
          addSkill={addSkill}
          skillList={skillList}
        ></InfoPanel>

        <Preview
          basicInfo={basicInfo}
          edu={edu}
          workExp={workExp}
          skillList={skillList}
        ></Preview>
      </div>
    </>
  );
}

export default App;
