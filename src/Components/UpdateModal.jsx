import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Select from 'react-select'
import { useFormik } from 'formik'
import { CustomSchema } from '../Schemas/Schema'
import { UpdateSchema } from '../Schemas/updateSchema'
const date = new Date();
const todayDate = date.toISOString().slice(0, 10);
const UpdateModal = ({ noteUpdation, updateInitialValues, setupdateInitialValues, options }) => {
    const [displayPass, setDisplayPass] = useState(false)
    console.log("update initial : ", updateInitialValues.userNote)
    const check = useFormik({
        initialValues: {
            userUpdateNote: updateInitialValues.userNote,
            userUpdateName: updateInitialValues.userName,
            userUpdateEmail: updateInitialValues.userEmail,
            userUpdatePassword: updateInitialValues.userPassword,
            Updatedate: updateInitialValues.date,
            Updatedaterange: updateInitialValues.daterange,
            Updatefood: updateInitialValues.food
        },
        validationSchema: UpdateSchema,
        onSubmit: (values) => {
            alert("hello check submit")
        }
    })
    const giveAlert = () => {
        alert("Hello , me alert")
    }
    console.log("values : ", check.values)
    console.log("initial values : ", check.initialValues)
    console.log("errors ", check.errors)
    return (
        <>
            {/* <form onSubmit={check.handleSubmit} >
                <input type="text" name="userUpdateNote" id="" />
                <button type='submit' >Submit</button>
            </form> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-dark " id="exampleModalLabel">Update Your Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={check.handleSubmit}>
                                <label className='text-dark mt-3' >Enter updated Note</label>
                                <input type="text" className='form-control' name='userUpdateNote' placeholder='Enter Your Note' value={updateInitialValues.userNote} onChange={(e) => setupdateInitialValues({ ...updateInitialValues, userNote: e.target.value })} />
                                {check.errors.userUpdateNote && check.touched.userUpdateNote ? <p className='text-danger' > {check.errors.userUpdateNote} </p> : null}

                                <label className='text-dark mt-3' >Enter updated name</label>
                                <input type="text" className='form-control' name='userUpdateName' placeholder='Enter Your Name' value={updateInitialValues.userName} onChange={check.handleChange} />
                                {check.errors.userUpdateName && check.touched.userUpdateName ? <p className='text-danger' > {check.errors.userUpdateName} </p> : null}

                                <label className='text-dark  mt-3' >Enter updated Email</label>
                                <input type="email" className='form-control' name='userUpdateEmail' placeholder='Enter Your email' value={updateInitialValues.userEmail} onChange={(e) => setupdateInitialValues({ ...updateInitialValues, userEmail: e.target.value })} />
                                <input type="text" name="daterange" className='form-control mt-3' value={updateInitialValues.daterange} onChange={(e) => setupdateInitialValues({ ...updateInitialValues, daterange: e.target.value })} placeholder='Pick date range' />
                                <label className='text-dark  mt-3' >Enter updated Password</label>
                                <div className='pass-div' >
                                    <input name='userUpdatePassword' type={displayPass ? "text" : "password"} className='form-control' placeholder='Enter Password . . .' value={updateInitialValues.userPassword} onChange={(e) => setupdateInitialValues({ ...updateInitialValues, userPassword: e.target.value })} />
                                    <button type='button' className='pass-btn' onClick={() => setDisplayPass(!displayPass)} > {displayPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} </button>
                                </div>
                                <label className='text-dark  mt-3' >Enter updated date</label>
                                <input type="date" className='form-control' name='Updatedate' value={updateInitialValues.date} max={todayDate} onChange={(e) => setupdateInitialValues({ ...updateInitialValues, date: e.target.value })} />
                                <label className='text-dark  mt-3' >Enter updated Team</label>
                                <Select name='Updatefood' options={options} value={options.filter(option => option.value === updateInitialValues.food)} onChange={(e) => setupdateInitialValues({ ...updateInitialValues, food: e.value })} />
                                <button type="button" onClick={giveAlert} >Submit</button>
                                <button type="submit">Data submission</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={noteUpdation} >Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateModal