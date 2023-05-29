import * as Yup from "yup"

const date = new Date();
const todayDate = date.toLocaleDateString();
console.log(todayDate)

const validFileExtensions = { file: ['csv'], image: ['jpg', 'png'] };

function isValidFileType(fileName, fileType) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}
function isValidImgType(fileName, fileType) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}
const MAX_FILE_SIZE = 102400;
const MAX_IMAGE_SIZE = 2048000;
export const CustomSchema = Yup.object().shape({
    userNote: Yup.string().min(5, "Note should be of minimum 5 characters").required("Please Enter Your Note"),
    userName: Yup.string().min(2, "Name should be of minimum 2 characters").max(30, "Note should be of maximum 30 characters").required("Please Enter Your Name").matches(/^[A-Za-z]+$/,'Numbers kya thi aya bhai name ma'),
    userEmail: Yup.string().email('Enter Valid email').required("Enter Your Email"),
    userPassword: Yup.string().min(8).required("Please Enter Password").matches(/[0-9]{2}/, 'Password requires two numbers')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
    userConfirmPassword: Yup.string().required("Please Re-Enter Password").oneOf([Yup.ref('userPassword'), null], "Password must match"),
    date: Yup.date().required('Please Enter Date').max(todayDate, 'Future Dates not allowed'),
    file: Yup
        .mixed()
        .required("Please upload a file of csv format")
        .test("is-valid-type", "Only csv files are allowed",
            value => isValidFileType(value && value.name.toLowerCase(), "file"))
        .test("is-valid-size", "Max allowed size is 100KB",
            value => value && value.size <= MAX_FILE_SIZE),
    image: Yup
        .mixed()
        .required("Please upload a Image")
        .test("is-valid-type", "Only jpg and png format images are allowed",
            value => isValidImgType(value && value.name.toLowerCase(), "image"))
        .test("is-valid-size", "Max size of photo shold be 2MB ",
            value => value && value.size <= MAX_IMAGE_SIZE),
    daterange : Yup.mixed().required("Pick a date range"),
    food : Yup.string().required('Please select a food')
});