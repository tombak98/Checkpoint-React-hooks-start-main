import React from 'react';

function SinglePet(props) {
const [adopted, setAdopted] = React.useState(false)
  return (
    <div className={`single-pet` + (adopted ? " adopted":"")}>
      <h3>Name: {props.pet.name}</h3>
      <p>{props.pet.description}</p>
      <p>Species: {props.pet.species}</p>
      <p>Status: {adopted ? "Adopted!":"Available!"}</p>
      <button onClick={()=>setAdopted(!adopted)}>Toggle Status</button>
    </div>
  );
}

export default SinglePet;
