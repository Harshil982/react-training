import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { MdModeEditOutline } from 'react-icons/md'

const Note = ({data,setDataInModal,deleteNote}) => {
    return (
        <div className='Note ms-3' >
            <h3>{data.title}</h3>
            <p>name : {data.name}</p>
            <p>email : {data.email}</p>
            <p>password : {data.password}</p>
            <div className='d-flex justify-content-end' >
                <button onClick={() => setDataInModal(data.id)} className='common-btn' data-bs-toggle="modal" data-bs-target="#exampleModal" ><MdModeEditOutline /></button>
                <button onClick={() => deleteNote(data.id)} className='common-btn' ><FaTrashAlt /></button>
            </div>
        </div>
    )
}

export default Note