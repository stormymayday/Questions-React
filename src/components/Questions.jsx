import Question from "./Question.jsx";

// Original
// function Questions({ questions }) {

//     return (

//         <section className="container">
//             <h1>questions</h1>

//             {
//                 questions.map((question) => {

//                     return (
//                         <Question key={question.id} {...question} />
//                     );

//                 })
//             }

//         </section>

//     );
// }

// Alternative
function Questions({ questions, activeId, toggleQuestion }) {

    return (

        <section className="container">
            <h1>questions</h1>

            {
                questions.map((question) => {

                    return (
                        <Question key={question.id} {...question} activeId={activeId} toggleQuestion={toggleQuestion} />
                    );

                })
            }

        </section>

    );
}

export default Questions;