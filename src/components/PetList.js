/* eslint-disable no-unused-vars */
import React from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  const [view, setView] = React.useState("all")

  const viewHandler = (event) => {
    setView(event.target.value)
  }

  return (
    <>
      <div>
        <span>Filter by species </span>
        <select id="dropdown" value={view} onChange={viewHandler}>
          <option value="all">all</option>
          <option value="cat">cats</option>
          <option value="dog">dogs</option>
        </select>
      </div>
      <div className="pet-list">
            {props.pets.filter((petObj)=>{
              if (view === "all") {
                return true
              } else {
                return petObj.species === view
              }
            }).map((petObj) =>
              <SinglePet key={petObj.id} pet={petObj} handleDelete={props.handleDelete}/>
              )}
      </div>
    </>
  )
}

export default PetList;
