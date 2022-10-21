import { useState } from 'react';
import stackStyle from './StackUsed.module.css';
import StackUsedCard from '../card/StackUsedCard';

function StackUsed() {
    const [stackUsed, setStackUsed] = useState([
        {id: 1, name: 'github', color: "#29242f"},
        {id: 2, name: 'heroku', color: "#79589f"},
        {id: 3, name: 'free apis', color: "#ff8c00 "},
        {id: 4, name: 'free icons', color: "#4ad295"},
        {id: 5, name: 'reactJS', color: "#4ad295"},
    ]);

    return (
        <>
        <section className={ stackStyle.stack_container }>
            <div className={[stackStyle.stackTitle, "text_capitalize"].join(' ')}>
                <h3>thanks to this technology</h3>
            </div>
            <StackUsedCard stackUsed = { stackUsed } />
               
        </section>
        <div className={ stackStyle.skew_div }>

        </div>
        </>
    )
}

export default StackUsed;