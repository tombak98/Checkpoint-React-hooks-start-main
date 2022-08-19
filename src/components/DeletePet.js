import React from 'react';

const DeletePet = (props) => {
    return (
        <>
        <button className="delete-pet" onClick={()=>{props.handleDelete(props.petId)}}>Delete</button>
        </>
    )
};

export default DeletePet;