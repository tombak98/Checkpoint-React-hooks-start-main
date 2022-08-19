/* eslint-disable no-unused-vars */

import React from 'react';
import PetList from './PetList';
import axios from 'axios'

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
// import samplePets from '../petdata';


const Root = () => {

  const[petsList, setPetsList] = React.useState([])
  const[loadState, setLoadState] = React.useState(false)
  const[error, setError] = React.useState(null)


  async function fetchData() {
    try {
      setLoadState(true)
      await axios.get('/api/pets')
      .then((res) => setPetsList(res.data))
      .finally(()=> setLoadState(false))
    } catch (err) {
      setError(err)
    }
  }
  // useEffect with no dependencies will only make it run once!
  React.useEffect(()=> {
    fetchData()
  },[])

  // delete pet
  async function handleDelete(petId) {
    try {
      setLoadState(true)
      await axios.delete(`/api/pets/${petId}`)
      .then(()=> setLoadState(false))
    } catch(err) {
      setError(err)
    }
    await fetchData()
    // this method below does it without making the delete request
    // let newArray = petsList
    // setPetsList(newArray.filter(function(element){
    //   if (element.id === petId) {
    //     return false
    //   } else {
    //     return true
    //   }
    // }))
    // setDeleted(!deleted)
  }

  // error handle
  if (error) return `Error: ${error.message}`

  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={petsList} handleDelete={handleDelete} />
      <h1>{loadState ? "Loading":"Done Loading!"}</h1>
    </>
  )
}

export default Root;
