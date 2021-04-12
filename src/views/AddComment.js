import React, {useState} from 'react'

const AddComment= ({addNewComment}) => {


    const [addComment, setAddComment] = useState('')

    const [addEmail, setAddEmail] = useState('')

    const [addGender,setAddGender] = useState('')


    const handleForm = (e) => {
        e.preventDefault();
        addNewComment(addEmail, addComment,addGender);
        setAddComment('');
        setAddEmail('');
        setAddGender('');
    }

    return (
        <form className="mt-4" onSubmit={handleForm}>
            <div className="card card-body">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" value={addEmail} onChange={(e)=>{setAddEmail(e.target.value)}}/>
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <select className="form-control" value={addGender} onChange={(e =>{setAddGender(e.target.value)})}>
                        <option value=""></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                    <label>Comments</label>
                    <textarea className="form-control" rows="3" value={addComment} onChange={(e)=> {setAddComment(e.target.value)}}></textarea>                
                </div>
                <button type="submit" className="btn btn-primary mt-4">Save</button>
            </div>
        </form>
    )
}

export default AddComment