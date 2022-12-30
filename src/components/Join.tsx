import React from 'react';
import { useState, useEffect } from 'react'
import {addMember, Member} from"../backend/firebaseconfig"

import '../styles/Join.css'


const Join = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [mail, setMail] = useState('')
  const [uni, setUni] = useState('Aalto University')
  const [field, setField] = useState('ELEC')
  const [gradyear, setGradyear] = useState(2022)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  const setNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) =>{
    setName(event.target.value)
  }
  const setSurnameChange = (event) =>{
    setSurname(event.target.value)
  }
  const setMailChange = (event: any) =>{
    setMail(event.target.value)
  }
  const setUniChange = (event: any) =>{
    setUni(event.target.value)
  }
  const setFieldChange = (event: any) =>{
    setField(event.target.value)
  }
  const setGradyearChange = (event: any) =>{
    setGradyear(event.target.value)
  }

  const addPerson = (event) =>{
    console.log("In add person")
    event.preventDefault()
    const personObject: Member = {
      name: name,
      surname: surname,
      mail: mail,
      uni: uni,
      field:field,
      gard: gradyear,
    }
    setName('')
    setSurname('')
    setMail('')
    setUni('Aalto University')
    setField('ELEC')
    setGradyear(2022)
    addMember(personObject)
  }


  return (
    <div className='JoinPage'>
      <h1>Join our Assosiation!</h1>
    <form className='JoinForm' onSubmit={addPerson}>
    <label>
      Name:
      <input type="text" name="name" value={name} id='name' onChange={setNameChange} required/>
    </label>
    <label>
      Surname:
      <input type="text" name="surname" value={surname} id='surname' onChange={setSurnameChange} required/>
    </label>
    <label>
      Email:
      <input type="text" name="mail" value={mail} id='mail' onChange={setMailChange} required/>
    </label>
    <label>
      University:
      <select onChange={setUniChange} id='uni' defaultValue='AaltoUni' required>
        <option value="AaltoUni">Aalto University</option>
        <option value="HelsinkiUni">Helsinki University</option>
        <option value="otherUni">Other</option>
      </select>
    </label>
    <label>
      Field of study:
      <select onChange={setFieldChange} id='field' defaultValue='ELEC' required>
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
      <select onChange={setGradyearChange} id='grad' defaultValue='grad 2022' required>
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
    <div className='SubmitForm'>
    <input type="submit" value="Submit" className='submitbtn' />
    </div>
  </form>
  </div>
  )
}

export default Join