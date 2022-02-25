import IconPlus from '../../assets/images/icon-plus.svg';
import IconMinus from '../../assets/images/icon-minus.svg';

import './votebutton.css'

export default function VoteButton(){
    return(
        <div className='container-button'>
            <button>
                <img src={IconPlus} alt="Icon Plus" />
            </button>
                12
            <button>
                <img src={IconMinus} alt="Icon Plus" />
            </button>
        </div>
    )
}