/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export default function Preview({ basicInfo, edu, workExp, skillList }) {
  const [font, setFont] = useState('Roboto');
  const [accentColor, setAccentColor] = useState('#004851');

  const hexToRgb = (hex) =>
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => '#' + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));

  const calculateLuminance = (hex) => {
    const rgb = hexToRgb(hex);
    const [r, g, b] = rgb;
    const l = (0.299 * r) + (0.587 * g) + (0.114 * b)
    return l > 186 ? 'black' : 'white'
  };
  let textColor = calculateLuminance(accentColor);
  return (
    <div className='preview'>
      {console.log(calculateLuminance(accentColor))}
      <div className='iconsWrapper'>
        <svg
          className='previewIcon fontIcon'
          fill='#000000'
          width='20px'
          height='20px'
          viewBox='0 0 17 16'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            setFont(font === 'Roboto' ? 'Arial' : 'Roboto');
          }}
        >
          <path d='M4.51 2.6.25 13.67h1.34l1.49-3.86h4l1.52 3.86h1.34L5.68 2.6a.63.63 0 0 0-1.17 0zm-.95 6 1.54-4 1.53 4zm9.35-2.54a2.8 2.8 0 0 0-3 2.08l1.21.31a1.6 1.6 0 0 1 1.78-1.14c.77 0 1.59.26 1.59 1v.75c-.27 0-.63.09-.94.13a9.12 9.12 0 0 0-2.5.52 2.06 2.06 0 0 0-1.41 2.23 1.94 1.94 0 0 0 .88 1.44 3 3 0 0 0 1.62.43 4.39 4.39 0 0 0 1.36-.22 2.92 2.92 0 0 0 1-.52v.61h1.25V8.3c0-1.3-1.14-2.24-2.84-2.24zm.22 6.33a2.4 2.4 0 0 1-1.91-.07.64.64 0 0 1-.32-.52c-.1-.89.82-1.16 2.8-1.38l.76-.1c-.19 1.68-.94 1.94-1.33 2.07z' />
        </svg>

        <input
          type='color'
          className='previewIcon'
          style={{ height: 30 + 'px', width: 30 + 'px' }}
          onChange={(e) => {
            setAccentColor(e.target.value);
            console.log(e);
          }}
        />
      </div>

      <div className='printable' style={{ fontFamily: font }}>
        <div
          className='basicInfoPreview'
          style={{ backgroundColor: accentColor, color: textColor }}
        >
          <h1 className='namePriview'>
            {basicInfo.firstName} {basicInfo.lastName}
          </h1>
          <div className='contactInfo'>
            <div className='emailWrapper'>
              <svg
                width='20px'
                height='20px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  id='vector'
                  d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
                  stroke={textColor}
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  id='vector_2'
                  d='M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688'
                  stroke={textColor}
                  strokeWidth='1.5'
                  strokeLinecap='round'
                />
              </svg>
              <p>{basicInfo.email}</p>
            </div>
            <div className='phoneWrapper'>
              <svg
                width='20px'
                height='20px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z'
                  stroke={textColor}
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <p>{basicInfo.phoneNumber}</p>
            </div>
          </div>
        </div>
        <div className='mainInfo' style={{ padding: 30 + 'px' }}>
          <div className='aboutMePreview'>
            <h2
              className='aboutMe'
              style={{
                backgroundColor: 'lightgrey',
                marginBottom: 10 + 'px',
                color: accentColor,
              }}
            >
              About Me
            </h2>
            <p style={{ textAlign: 'justify' }}>{basicInfo.description}</p>
          </div>
          {edu.length > 0 && (
            <div className='educationPreview'>
              <h2
                style={{
                  backgroundColor: 'lightgrey',
                  marginBottom: 10 + 'px',
                  marginTop: 30 + 'px',
                  color: accentColor,
                }}
              >
                Education
              </h2>
              {edu.map(
                (element) =>
                  element.institution && (
                    <div key={element.id} style={{ display: 'flex' }}>
                      <p style={{ width: 170 + 'px' }}>
                        {' '}
                        {element.startingYear &&
                          element.startingYear.replace('-', '/')}{' '}
                        -{' '}
                        {element.ongoing
                          ? element.ongoing && 'Present'
                          : element.graduatingYear &&
                            element.graduatingYear.replace('-', '/')}{' '}
                      </p>
                      <div>
                        <p style={{ textAlign: 'justify', fontWeight: 500 }}>
                          {element.institution}
                        </p>
                        <p>{element.degree}</p>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
          {workExp.length > 0 && (
            <div className='workExpPreview'>
              <h2
                style={{
                  backgroundColor: 'lightgrey',
                  marginBottom: 10 + 'px',
                  marginTop: 30 + 'px',
                  color: accentColor,
                }}
              >
                Work Experience
              </h2>
              {workExp.map(
                (element) =>
                  element.workplace && (
                    <div key={element.id} style={{ display: 'flex' }}>
                      <p style={{ width: 170 + 'px' }}>
                        {' '}
                        {element.startingYear &&
                          element.startingYear.replace('-', '/')}{' '}
                        -{' '}
                        {element.ongoing
                          ? element.ongoing && 'Present'
                          : element.endYear &&
                            element.endYear.replace('-', '/')}{' '}
                      </p>
                      <div>
                        <p style={{ textAlign: 'justify', fontWeight: 500 }}>
                          {element.workplace}
                        </p>
                        <p>{element.position}</p>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
          {skillList.length > 0 && (
            <div className='skillListpPreview'>
              <h2
                style={{
                  backgroundColor: 'lightgrey',
                  marginBottom: 10 + 'px',
                  marginTop: 30 + 'px',
                  color: accentColor,
                }}
              >
                Skills
              </h2>
              {skillList.map((element) => (
                <li key={uuidv4()}>{element} </li>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
