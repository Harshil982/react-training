import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const MainURL = "https://jsonplaceholder.typicode.com/posts";
const Posts = () => {
    const [posts, setposts] = useState([])
    const [postRequest, setPostRequest] = useState([])
    const [putRequest, setputRequest] = useState(null)
    const [deleteRequest, setdeleteRequest] = useState(null)
    const [error, setError] = useState(null)
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setposts(res.data)
        }).catch((err) => {
            console.log(err)
            setError(err.message)
        })

        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            console.log(response.data)
            setPostRequest([...postRequest, response.data]);
        });

        axios.get(`${MainURL}/2`).then((response) => {
            setputRequest(response.data);
        });

        axios.get(`${MainURL}/4`).then((response) => {
            setdeleteRequest(response.data);
        });

        setLoading(false);
    }, []);

    const ShowToastMessage = (msg) => {
        toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    function AddPost() {
        axios
            .post(MainURL, {
                title: "Test title",
                body: "Mamba mentality !!!"
            })
            .then((response) => {
                ShowToastMessage('Posted Successfully !');
                setPostRequest([...postRequest, response.data]);
            });
    }
    function updatePost() {
        axios
            .put(`${MainURL}/2`, {
                title: "Put Request",
                body: "Successful Put Request"
            })
            .then((response) => {
                ShowToastMessage('Updated Successfully !');
                setputRequest(response.data);
            });
    }
    function deletePost() {
        axios
            .delete(`${MainURL}/4`)
            .then(() => {
                ShowToastMessage('deleted Successfully !');
                setdeleteRequest(null)
            });
    }
    return (
        <div className='mx-3 mt-3' >
            <h3 className='text-white' >Get Posts</h3>
            {error && <p>{error}</p>}
            {Loading
                ?
                <p>Loading . . .</p>
                :
                <>
                    <ol className='p-0 mx-3' >
                        {
                            posts.map((post, index) => {
                                return (
                                    <li key={post.id}>
                                        <p>{post.title}</p>
                                        <p>{post.body}</p>
                                        <hr />
                                    </li>
                                )
                            })
                        }
                    </ol>
                    <h3 className='mt-5 text-white'>Post Posts</h3>

                    <div>
                        {
                            postRequest.map((data, ind) => {
                                return (
                                    <div key={ind} >
                                        <h1 className='text-white'>{data.title}</h1>
                                        <p className='text-white'>{data.body}</p>
                                    </div>
                                )
                            })
                        }
                        <button onClick={AddPost} className='mt-4'>Create Post</button>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </div>

                    <h3 className='mt-5 text-white mt-4'>Update Posts</h3>

                    <div>
                        <h1 className='text-white'>{putRequest?.title}</h1>
                        <p className='text-white'>{putRequest?.body}</p>
                        <button onClick={updatePost} title='Click me' >Update Post</button>
                    </div>

                    <h3 className='mt-5 text-white'>Delete Posts</h3>

                    <div>
                        <h1 className='text-white'>{deleteRequest?.title}</h1>
                        <p className='text-white'>{deleteRequest?.body}</p>
                        {deleteRequest && <button onClick={deletePost}  className='mt-4'>Delete Post</button>}
                    </div>
                </>
            }
        </div>
    )
}

export default Posts