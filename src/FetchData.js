import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = "https://swapi.dev/api/people/"

const FetchData = () => {
  const [peoples, setPeoples] = useState([])

  useEffect(() => {
    async function fetchPeoples() {
      const response = await axios.get(BASE_URL)

      setPeoples(response.data.results)
    }

    fetchPeoples()
  }, [])

  if (peoples.length === 0) {
    return (
      <h1>Fetching data...</h1>
    )
  }

  return (
    <ul>
      {peoples.map((people, index)=> <li key={index}>{people.name}</li>)}
    </ul>
  )
}

export default FetchData
