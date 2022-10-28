/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/persons'

const create = async newObject => {
  console.log("In create");
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

export default {create}