import React from 'react'

const UpdateModal = ({updatenoteVal , setupdatenote , noteUpdation}) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-dark " id="exampleModalLabel">Update Your Note</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <label className='text-dark' >Enter updated Note</label>
                        <input type="text" className='form-control' placeholder='Enter Your Note' value={updatenoteVal} onChange={(e) => setupdatenote(e.target.value)} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={noteUpdation} >Update Note</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateModal