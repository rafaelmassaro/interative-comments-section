import { useState, useEffect } from 'react'

import './messagebox.css';

import IconEdit from '../../assets/images/icon-edit.svg';
import IconDelete from '../../assets/images/icon-delete.svg';
import IconReply from '../../assets/images/icon-reply.svg';

import VoteButton from '../VoteButton';
import FormButton from '../FormButton';

import {api} from '../../services/api';


export default function MessageBox() {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const loadComments = async () => {
            const response = await api.get('comments')

            setComments(response.data)
        }

        loadComments()
    }, [])

    return(
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>
                    <div className="container">
                        <section className="vote-area">
                            <VoteButton score={comment.score} />
                        </section>
                        <section className="message">
                            <div className="user-area">
                                <div className="user-info">
                                    <div className="user-avatar">
                                        <img src={comment.user.image.webp} alt={comment.user.username} />          
                                    </div>

                                    <a className='user-name' href="#">{comment.user.username}</a>

                                    {/* <span className='user-mark'>
                                        you
                                    </span> */}

                                    <span className='message-date'>{comment.createdAt}</span>
                                </div>

                                <div className='container-buttons'>
                                    {/* <button className='delete-button'>
                                        <img src={IconDelete} alt="Icon Delete"/>
                                        Delete
                                    </button>
                                    <button className='edit-button'>
                                        <img src={IconEdit} alt="Icon Edit"/>
                                        Edit
                                    </button> */}
                                    <button className='edit-button'>
                                        <img src={IconReply} alt="Icon Reply"/>
                                        Reply
                                    </button>
                                </div>

                            </div>
                            <p className="message-content">
                            {comment.content}
                            </p>
                        </section>
                    </div>



                </li>
            ))}
        </ul>
    )
}