import './messagebox.css';

import IconEdit from '../../assets/images/icon-edit.svg';
import IconDelete from '../../assets/images/icon-delete.svg';

import VoteButton from '../VoteButton';

export default function MessageBox() {
    return(
        <div className="container">
            <section className="vote-area">
                <VoteButton />
            </section>
            <section className="message">
                <div className="user-area">
                    <div className="user-info">
                        <div className="user-avatar">
                            <img src="http://github.com/rafaelmassaro.png" alt="avatar image" />          
                        </div>

                        <a className='user-name' href="#">rafaelmasso</a>

                        <span className='user-mark'>
                            you
                        </span>

                        <span className='message-date'>1 month ago</span>
                    </div>

                    <div className='container-buttons'>
                        <button className='delete-button'>
                            <img src={IconDelete} alt="Icon Delete"/>
                            Delete
                        </button>
                        <button className='edit-button'>
                            <img src={IconEdit} alt="Icon Edit"/>
                            Edit
                        </button>
                    </div>

                </div>
                <div className="message-content">
                Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
                </div>
            </section>
        </div>
    )
}