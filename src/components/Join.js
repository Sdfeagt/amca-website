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

  const addPerson = (event) =>{
      //TODO: eventually export the logic to app.js. To be done before backend
    event.preventDefault()
const personObject = {
  name: name,
  surname: surname,
  mail: mail,
  uni: uni,
  field:field,
  gradYear: gradyear,
}
setName('')
setSurname('')
setMail('')
setUni('')
setField('')
setGradyear(2022)
  }


  return (
    <div className='JoinPage'>
      <h1>Join our Assosiation!</h1>
    <form className='JoinForm' onSubmit={addPerson}>
    <label>
      Name:
      <input type="text" name="name" value={name} id='name' onChange={setNameChange}/>
    </label>
    <label>
      Surname:
      <input type="text" name="surname" value={surname} id='surname' onChange={setSurnameChange}/>
    </label>
    <label>
      Email:
      <input type="text" name="mail" value={mail} id='mail' onChange={setMailChange}/>
    </label>
    <label>
      University:
      <select onChange={setUniChange} id='uni' defaultValue='AaltoUni'>
        <option value="AaltoUni">Aalto University</option>
        <option value="HelsinkiUni">Helsinki University</option>
        <option value="otherUni">Other</option>
      </select>
    </label>
    <label>
      Field of study:
      <select onChange={setFieldChange} id='field' defaultValue='ELEC'>
        <option value="ELEC">ELEC</option>
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
      <select onChange={setGradyearChange} id='grad' defaultValue='grad 2022'>
        <option value="grad 2022">2022</option>
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