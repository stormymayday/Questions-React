import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

// Original:
// function Question({ title, info }) {

//     const [showInfo, setShowInfo] = useState(false);

//     return (
//         <article className='question'>
//             <header>
//                 <h5>{title}</h5>
//                 <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
//                     {
//                         showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />
//                     }
//                 </button>
//             </header>

//             {showInfo && <p>{info}</p>}

//         </article>
//     );
// }

// Alternative:
function Question({ id, title, info, activeId, toggleQuestion }) {

    // Setting 'isActive' to 'true' or 'false'
    const isActive = id === activeId;

    return (
        <article className='question'>
            <header>
                <h5>{title}</h5>
                <button className='question-btn' onClick={() => toggleQuestion(id)}>
                    {
                        isActive ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }
                </button>
            </header>

            {isActive && <p>{info}</p>}

        </article>
    );
}

export default Question;