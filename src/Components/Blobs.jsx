import React, { useContext } from 'react'
import { DataContext } from '../App';

const Blobs = () => {
    const data = useContext(DataContext);
    console.log(data)
    return (
        <>
            <svg className='commonBlob first' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF0066" d="M62.5,-21C70.1,3,57.8,32.8,34.9,49.9C12.1,66.9,-21.3,71.1,-42.9,56.1C-64.5,41.2,-74.3,6.9,-65.1,-19.2C-56,-45.3,-28,-63.3,-0.3,-63.3C27.5,-63.2,54.9,-45,62.5,-21Z" transform="translate(100 100)" />
            </svg>

            <svg className='commonBlob second' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#24A148" d="M54.9,-57.7C67.2,-42.7,70.2,-21.4,68.8,-1.5C67.3,18.4,61.3,36.8,49,49.5C36.8,62.2,18.4,69.2,1.4,67.8C-15.6,66.4,-31.2,56.6,-45.1,43.9C-59,31.2,-71.2,15.6,-71.3,-0.2C-71.5,-15.9,-59.6,-31.8,-45.7,-46.8C-31.8,-61.8,-15.9,-75.8,2.7,-78.5C21.4,-81.3,42.7,-72.7,54.9,-57.7Z" transform="translate(100 100)" />
            </svg>

            <svg className='commonBlob third' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F1C21B" d="M57.5,-47.4C70.3,-29.8,73.6,-6.1,69.1,16.6C64.6,39.3,52.3,61.2,32.9,71.8C13.6,82.4,-12.7,81.8,-34.7,71.4C-56.7,61.1,-74.4,41.1,-79.1,18.6C-83.8,-3.9,-75.6,-28.8,-60.2,-47C-44.9,-65.2,-22.4,-76.8,-0.1,-76.7C22.3,-76.7,44.7,-65.1,57.5,-47.4Z" transform="translate(100 100)" />
            </svg>

            <svg className='commonBlob fourth' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#8A3FFC" d="M60.3,-46.1C74.9,-29.8,81.2,-4.9,76.2,17.4C71.1,39.6,54.5,59.3,33.2,69.9C11.9,80.6,-14.3,82.2,-34.5,72.2C-54.6,62.2,-68.9,40.6,-74.6,16.7C-80.3,-7.2,-77.4,-33.3,-63.6,-49.4C-49.7,-65.6,-24.8,-71.7,-1,-70.9C22.9,-70.1,45.7,-62.4,60.3,-46.1Z" transform="translate(100 100)" />
            </svg>
        </>
    )
}

export default Blobs