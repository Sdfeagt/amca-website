import React from 'react'
import { useState } from 'react'

import '../styles/Join.css'


const Join = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [mail, setMail] = useState('')
  const [uni, setUni] = useState('')
  const [field, setField] = useState('')
  const [gradyear, setGradyear] = useState(2022)
  

  const setNameChange = (event) =>{
    setName(event.target.value)
  }
  const setSurnameChange = (event) =>{
    setSurname(event.target.value)
  }
  const setMailChange = (event) =>{
    setMail(event.target.value)
  }
  const setUniChange = (event) =>{
    setUni(event.target.value)
  }
  const setFieldChange = (event) =>{
    setField(event.target.value)
  }
  const setGradyearChange = (event) =>{
    setGradyear(event.target.value)
  }


  return (
    <div className='JoinPage'>
      <h1>Join our Assosiation!</h1>
    <form className='JoinForm'>
    <label>
      Name:
      <input type="text" name="name" value={name} onChange={setNameChange}/>
    </label>
    <label>
      Surname:
      <input type="text" name="surname" value={surname} onChange={setSurnameChange}/>
    </label>
    <label>
      Email:
      <input type="text" name="mail" value={mail} onChange={setMailChange}/>
    </label>
    <label>
      University:
      <select value={uni} onChange={setUniChange}>
        <option value="AaltoUni" selected="selected">Aalto University</option>
        <option value="HelsinkiUni">Helsinki University</option>
        <option selected value="otherUni">Other</option>
      </select>
    </label>
    <label>
      Field of study:
      <select value={field} onChange={setFieldChange}>
        <option value="ELEC" selected="selected">ELEC</option>
        <option value="SCI">SCI</option>
        <option value="CHEM">CHEM</option>
        <option value="ENG">ENG</option>
        <option value="ARTS">ARTS</option>
        <option value="BIZ">BIZ</option>
        <option value="otherStudy">Other</option>
      </select>
    </label>
    <label>
      Graduation year:
      <select value={gradyear} onChange={setGradyearChange}>
        <option value="grad 2022" selected="selected">2022</option>
        <option value="grad 2023">2023</option>
        <option value="grad 2024">2024</option>
        <option value="grad 2025">2025</option>
        <option value="grad 2026">2026</option>
        <option value="grad 2027">2027</option>
        <option value="grad 2028">2028</option>
        <option value="later">Other</option>
      </select>
    </label>
    <input type="submit" value="Submit" className='submitbtn' />
  </form>
  </div>
  )
}

export default Join