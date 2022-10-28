/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
//TODO: doesn't post to mongodb
const baseUrl = '/api/persons'

const create = async newObject => {
  console.log("In create");
  console.log("New obj: ", newObject);
  console.log("base URL: ", baseUrl);
  const response = await axios.post(baseUrl, newObject)
  console.log("Response: ", response);
  return response.data
}

export default {create}