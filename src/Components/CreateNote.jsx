import React, { useState } from 'react'
import Note from './Note'
import UpdateModal from './UpdateModal'
import NoteForm from './NoteForm'
// import DateRangePicker from 'rsuite/DateRangePicker';



const CreateNote = () => {
    
    const [updatenote, setupdatenote] = useState('')
    const [allNotes, setAllnotes] = useState([])
    const [Uid, setUid] = useState()
    

    const deleteNote = (uid) => {
        let afterDeleteNotes = allNotes.filter(n => n.id !== uid);
        setAllnotes(afterDeleteNotes)
    }
    const setDataInModal = (uid) => {
        let targetNote = allNotes.find(n => n.id === uid)
        console.log(targetNote.title)
        setupdatenote(targetNote.title)
        setUid(uid)
    }

    const noteUpdation = () => {
        let targetNote = allNotes.find(n => n.id === Uid);
        targetNote.title = updatenote;
        console.log(targetNote)
        setAllnotes([...allNotes])
    }

    return (
        <div>
            <h1 className='mt-4 mx-3 text-white' >CRUD Application</h1>
            {/* Modal for note updation */}
            <UpdateModal updatenoteVal={updatenote} setupdatenote={setupdatenote} noteUpdation={noteUpdation} />

            <NoteForm allNotes={allNotes} setAllnotes={setAllnotes} />
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