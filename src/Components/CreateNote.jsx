import React, { useState } from 'react'
import Note from './Note'
import UpdateModal from './UpdateModal'
import NoteForm from './NoteForm'
// import DateRangePicker from 'rsuite/DateRangePicker';
const options = [
    { value: 'CSK', label: 'CSK' },
    { value: 'GT', label: 'GT' },
    { value: 'RCB', label: 'RCB' },
    { value: 'MI', label: 'MI' },
    { value: 'RR', label: 'RR' },
    { value: 'DC', label: 'DC' },
]
const CreateNote = () => {
    const [updateInitialValues,setupdateInitialValues] = useState({
        userNote: "",
        userName: "",
        userEmail: "",
        userPassword: "",
        date: "",
        daterange : "",
        food : ""
    })
    const [updatenote, setupdatenote] = useState('')
    const [allNotes, setAllnotes] = useState([])
    const [Uid, setUid] = useState()
    

    const deleteNote = (uid) => {
        let afterDeleteNotes = allNotes.filter(n => n.id !== uid);
        setAllnotes(afterDeleteNotes)
    }
    const setDataInModal = (uid) => {
        let targetNote = allNotes.find(n => n.id === uid)
        setupdateInitialValues({
            userNote: targetNote.title,
            userName: targetNote.name,
            userEmail: targetNote.email,
            userPassword: targetNote.password,
            date: targetNote.date,
            daterange : targetNote.daterange,
            food : targetNote.food
        })
        setupdatenote(targetNote.title)
        setUid(uid)
    }

    const noteUpdation = () => {
        let targetNote = allNotes.find(n => n.id === Uid);
        targetNote.title = updateInitialValues.userNote;
        targetNote.name = updateInitialValues.userName;
        targetNote.email = updateInitialValues.userEmail;
        targetNote.password = updateInitialValues.userPassword;
        targetNote.date = updateInitialValues.date;
        targetNote.food = updateInitialValues.food;
        targetNote.daterange = updateInitialValues.daterange
        console.log(targetNote)
        setAllnotes([...allNotes])
    }

    return (
        <div>
            <h1 className='mt-4 mx-3 text-white' >CRUD Application</h1>
            {/* Modal for note updation */}
            <UpdateModal options={options} updatenoteVal={updatenote} setupdatenote={setupdatenote} noteUpdation={noteUpdation} updateInitialValues={updateInitialValues} setAllnotes={setAllnotes} allNotes={allNotes} setupdateInitialValues={setupdateInitialValues} />

            <NoteForm options={options} allNotes={allNotes} setAllnotes={setAllnotes} updateInitialValues={updateInitialValues} />
            {
                allNotes.length !== 0
                    ?
                    <div className='all-notes' >
                        {allNotes.map((n, ind) => {
                            return (
                                <Note data={n} key={ind} setDataInModal={setDataInModal} deleteNote={deleteNote} />
                            )
                        })
                        }
                    </div>
                    :
                    <p className='mt-3 mx-3 text-white' >No Notes Yet</p>
            }
        </div>
    )
}
export default CreateNote;