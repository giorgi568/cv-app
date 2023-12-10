/* eslint-disable react/prop-types */
import { UserInput, OngoingInput } from './simpleInputs';
import { v4 as uuidv4 } from 'uuid';
function BasicInfoForm({ updateInputsBasic }) {
  return (
    <fieldset className='basicInfoForm'>
      <legend>Basic Info</legend>

      <div className='inputWrapper'>
        <UserInput
          text={'First Name:*'}
          id='firstName'
          property={'firstName'}
          cb={updateInputsBasic}
        >
          {' '}
        </UserInput>
        <UserInput
          text={'Last Name:*'}
          id='lastName'
          property={'lastName'}
          cb={updateInputsBasic}
        >
          {' '}
        </UserInput>
        <UserInput
          text={'Email:*'}
          id='email'
          property={'email'}
          cb={updateInputsBasic}
        >
          {' '}
        </UserInput>
        <UserInput
          text={'Phone Number:*'}
          id='phoneNumber'
          property={'phoneNumber'}
          cb={updateInputsBasic}
        >
          {' '}
        </UserInput>
      </div>
      <label style={{ width: 350 + 'px' }} htmlFor='description'>
        Write Something About You Below*:
      </label>
      <textarea
        name='description'
        onChange={(e) => updateInputsBasic('description', e)}
      ></textarea>
    </fieldset>
  );
}

function EducationForm({
  toggleOngoing,
  edu,
  index,
  handleEduDelete,
  updateInputs,
}) {
  return (
    <fieldset className='educationForm'>
      <div
        style={{
          width: 350 + 'px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <legend style={{ display: 'flex', justifyContent: 'center' }}>
          Education
        </legend>
        <svg
          width='40px'
          height='40px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='deleteField'
          onClick={() => {
            handleEduDelete(index);
          }}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z'
            fill='#646cff'
          />
        </svg>
      </div>

      <div className='inputWrapper'>
        <UserInput
          text={'School'}
          id={uuidv4()}
          property={'institution'}
          cb={updateInputs}
          index={index}
        >
          {' '}
        </UserInput>
        <UserInput
          text={'Degree:'}
          id={uuidv4()}
          property={'degree'}
          cb={updateInputs}
          index={index}
        >
          {' '}
        </UserInput>
        <UserInput
          type='month'
          text={'Starting Year:'}
          id={uuidv4()}
          property={'startingYear'}
          cb={updateInputs}
          index={index}
        >
          {' '}
        </UserInput>
        <OngoingInput
          type='checkbox'
          text={'On-going'}
          id={uuidv4()}
          toggleOngoing={toggleOngoing}
          index={index}
        >
          {' '}
        </OngoingInput>
        {!edu.ongoing && (
          <UserInput
            type='month'
            text={'Graduating Year:'}
            id={uuidv4()}
            property={'graduatingYear'}
            cb={updateInputs}
            index={index}
          >
            {' '}
          </UserInput>
        )}
      </div>
    </fieldset>
  );
}

function WorkExperienceForm({
  toggleOngoingWork,
  workExp,
  index,
  handleWorkDelete,
  updateInputsWork,
}) {
  return (
    <fieldset className='workExperienceForm'>
      <div
        style={{
          width: 350 + 'px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <legend style={{ display: 'flex', justifyContent: 'center' }}>
          Work Experience
        </legend>
        <svg
          width='40px'
          height='40px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='deleteField'
          onClick={() => {
            handleWorkDelete(index);
          }}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z'
            fill='#646cff'
          />
        </svg>
      </div>

      <div className='inputWrapper'>
        <UserInput
          text={'Workplace:'}
          id={uuidv4()}
          property={'workplace'}
          cb={updateInputsWork}
          index={index}
        >
          {' '}
        </UserInput>
        <UserInput
          text={'Title/Position:'}
          id={uuidv4()}
          property={'position'}
          cb={updateInputsWork}
          index={index}
        >
          {' '}
        </UserInput>
        <UserInput
          type='month'
          text={'Starting Year:'}
          id={uuidv4()}
          property={'startingYear'}
          cb={updateInputsWork}
          index={index}
        >
          {' '}
        </UserInput>
        <OngoingInput
          type='checkbox'
          text={'On-going'}
          id={uuidv4()}
          toggleOngoing={toggleOngoingWork}
          index={index}
        >
          {' '}
        </OngoingInput>
        {!workExp.ongoing && (
          <UserInput
            type='month'
            text={'End Year:'}
            id={uuidv4()}
            property={'endYear'}
            cb={updateInputsWork}
            index={index}
          >
            {' '}
          </UserInput>
        )}
      </div>
    </fieldset>
  );
}

function SkillsForm({ deleteSkill, addSkill, skillList }) {
  let skill;

  return (
    <fieldset style={{}}>
      <legend> Skills </legend>

      <ul>
        {skillList.map((skill, index) => {
          return (
            <li key={uuidv4()} style={{color: '#646cff', display: 'flex', alignItems: 'center'}}>
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: 310 + 'px',
                  color: 'black'
                }}
              >
                {skill}
              </p>
                <DelBtn index={index} cb={deleteSkill}></DelBtn>
            </li>
          );
        })}
      </ul>

      <div className='userInputWrapper'>
        <input
          type='text'
          id='addSkill'
          placeholder='Enter Skill Here'
          onChange={(e) => (skill = e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addSkill(skill);
            document.getElementById('addSkill').value = '';
          }}
        >
          Add
        </button>
      </div>
    </fieldset>
  );
}

function DelBtn({ index, cb }) {
  return (
    <svg
      className='skillDelBtn'
      onClick={(e) => {
        e.preventDefault();
        cb(index);
      }}
      style={{ cursor: 'pointer' }}
      width='40px'
      height='40px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z'
        fill='#646cff'
      />
    </svg>
  );
}

export { BasicInfoForm, EducationForm, WorkExperienceForm, SkillsForm };
