import React, {useState} from 'react'
import AddComment from './AddComment'
import { v4 as uuidv4 } from 'uuid';
import { Alert, Card } from 'reactstrap';


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
                        <Card className="card mt-2 mb-2 p-2" key={comment.id}>
                            <div>
                                <p>{comment.email}</p>
                                <p>{comment.gender}</p>
                            </div>
                            <hr/>
                            <div>
                                <p>{comment.comment}</p>
                            </div>
                        </Card>
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

    const warningMsg = warning && <Alert color="danger" className="m-3">Veuillez compléter les champs</Alert>


    return(
        <div>
            {warningMsg}

            <AddComment addNewComment = {addNewComment}></AddComment>

            {myComments}

        </div>
    )
}

export default Comment
