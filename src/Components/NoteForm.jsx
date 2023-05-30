import React, { useState } from 'react'
import { useFormik } from 'formik'
import { CustomSchema } from './../Schemas/Schema'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Select from 'react-select'
import DateRangePicker from 'rsuite/DateRangePicker';
const initialValues = {
    userNote: "",
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
    date: "",
    file: null,
    image: null,
    daterange: "",
    food: ""
}
const date = new Date();
const todayDate = date.toISOString().slice(0, 10);

const NoteForm = ({ allNotes, setAllnotes ,options }) => {
    const { values, errors, handleChange, touched, handleBlur, handleSubmit, setFieldValue } = useFormik({
        initialValues: initialValues,
        // validationSchema: CustomSchema,
        onSubmit: (values, action) => {
            // console.log(values)
            const randomId = Math.floor(Math.random() * 100000 + 1)
            let newNote = { title: values.userNote, id: randomId, name: values.userName, email: values.userEmail, password: values.userPassword, date: values.date, daterange: values.daterange, food: values.food }
            console.log("new Note : " , newNote)
            setAllnotes([...allNotes, newNote]);
            action.resetForm();
            setFieldValue("image", null)
        }
    })
    
    const [displayPass, setDisplayPass] = useState(false)
    const [displayConfPass, setDisplayConfPass] = useState(false)
    return (
        <form className='mx-3 mt-4 form' onSubmit={handleSubmit} >
            {/* Note input */}
            <input type="text" name="userNote" className='form-control mt-3' placeholder='Enter Note . . .' value={values.userNote} onChange={handleChange} onBlur={handleBlur} />
            {errors.userNote && touched.userNote ? <p className='text-white' > {errors.userNote} </p> : null}

            {/* Name input */}
            <input type="text" name="userName" className='form-control mt-3' placeholder='Enter Name . . .' value={values.userName} onChange={handleChange} onBlur={handleBlur} />
            {errors.userName && touched.userName ? <p className='text-white' > {errors.userName} </p> : null}

            {/* Email input */}
            <input type="email" name="userEmail" className='form-control mt-3' placeholder='Enter Email . . .' value={values.userEmail} onChange={handleChange} onBlur={handleBlur} />
            {errors.userEmail && touched.userEmail ? <p className='text-white' > {errors.userEmail} </p> : null}

            {/* Date input */}
            <input type="date" name="date" className='form-control mt-3' placeholder='Enter date . . .' value={values.date} onChange={handleChange} onBlur={handleBlur} max={todayDate} />
            {errors.date && touched.date ? <p className='text-white' > {errors.date} </p> : null}

            {/* File input */}
            <label className='mt-3 text-white' htmlFor="">File Input</label>
            <input type="file" name="file" className='form-control ' onChange={(event) => {
                // console.log(event.target.files[0]) 
                setFieldValue("file", event.target.files[0])
            }} onBlur={handleBlur} />
            {errors.file && touched.file ? <p className='text-white' > {errors.file} </p> : null}

            {/* Image input */}
            <label className='mt-3 text-white' htmlFor="">Img Input</label>
            <input type="file" name="image" className='form-control ' onChange={(event) => {
                // console.log(event.target.files[0]) 
                setFieldValue("image", event.target.files[0])
            }} onBlur={handleBlur} />
            {errors.image && touched.image ? <p className='text-white' > {errors.image} </p> : null}

            {/* date range picker */}
            {/* <DateRangePicker block onChange={(e) => setFieldValue("daterange",e)} /> */}
            <input type="text" name="daterange" className='form-control mt-3' onChange={handleChange} onBlur={handleBlur} placeholder='Pick date range' />
            {errors.daterange && touched.daterange ? <p className='text-white' > {errors.daterange} </p> : null}

            {/* Password input */}
            <div className='pass-div' >
                <input type={displayPass ? "text" : "password"} name="userPassword" className='form-control mt-3' placeholder='Enter Password . . .' value={values.userPassword} onChange={handleChange} onBlur={handleBlur} />
                <button type='button' className='pass-btn' onClick={() => setDisplayPass(!displayPass)} > {displayPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} </button>
                {errors.userPassword && touched.userPassword ? <p className='text-white' > {errors.userPassword} </p> : null}
            </div>

            {/* Re-Password input */}
            <div className='pass-div' >
                <input type={displayConfPass ? "text" : "password"} name="userConfirmPassword" className='form-control mt-3' placeholder='Re-Enter Password . . .' value={values.userConfirmPassword} onChange={handleChange} onBlur={handleBlur} />
                <button type='button' className='pass-btn' onClick={() => setDisplayConfPass(!displayConfPass)} > {displayConfPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} </button>
                {errors.userConfirmPassword && touched.userConfirmPassword ? <p className='text-white' > {errors.userConfirmPassword} </p> : null}
            </div>

            <Select options={options} name='food' onChange={(e) => { setFieldValue("food", e.value) }} onBlur={handleBlur} placeholder="Select Your IPL Team . . ." className='mt-3' />
            {errors.food && touched.food ? <p className='text-white' > {errors.food} </p> : null}

            {/* Submit btn */}
            <button type="submit" className='btn btn-dark mt-3' >Submit</button>
        </form>
    )
}

export default NoteForm