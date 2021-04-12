import React, {useState} from 'react'
import AddComment from './AddComment'
import { v4 as uuidv4 } from 'uuid';


const Comment = () => {

    const [comments, setComments] = useState([
        {
        id: null, 
        email : '',
        gender : '', 
        comment: ''
        }
    ])

    const [warning, setWarning] = useState(false)

    const myComments = comments.map(comment => {

        if(comment.comment !== ''){
            return(
                        <div className="card mt-2 mb-2 p-2" key={comment.id}>
                            <div>
                                <p>{comment.email}</p>
                                <p>{comment.gender}</p>
                            </div>
                            <hr/>
                            <div>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    )
        }else{
            return null;
        }
       
    })

    const addNewComment = (newEmail, newComment, newGender) => {
        if(newComment !== '' && newEmail !=='' && newGender !==''){
            warning && setWarning(false);

            setComments([...comments, {
                id: uuidv4(),
                email: newEmail,
                gender: newGender,
                comment: newComment
            }])
        }else{
            setWarning(true)
        }
    }

    const warningMsg = warning && <div className="alert alert-danger mt-5" role="alert">Veuillez compléter les champs</div>


    return(
        <div>
            {warningMsg}

            {myComments}

            <AddComment addNewComment = {addNewComment}></AddComment>

        </div>
    )
}

export default Comment
