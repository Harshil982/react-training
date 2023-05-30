import * as Yup from "yup"

const date = new Date();
const todayDate = date.toLocaleDateString();

export const UpdateSchema = Yup.object().shape({
    userUpdateNote: Yup.string().min(5, "Note should be of minimum 5 characters").required("Please Enter Your Note"),
    userUpdateName: Yup.string().min(2, "Name should be of minimum 2 characters").max(30, "Note should be of maximum 30 characters").required("Please Enter Your Name").matches(/^[A-Za-z]+$/, 'Numbers not allowed in name'),
    userUpdateEmail: Yup.string().email('Enter Valid email').required("Enter Your Email"),
    userUpdatePassword: Yup.string().min(8).required("Please Enter Password").matches(/[0-9]{2}/, 'Password requires two numbers')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
    Updatedate: Yup.date().required('Please Enter Date').max(todayDate, 'Future Dates not allowed'),
    Updatedaterange: Yup.mixed().required("Pick a date range"),
    Updatefood: Yup.string().required('Please select Your team')
});