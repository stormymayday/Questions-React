import Question from "./Question.jsx";

function Questions({ questions }) {
    return (

        <section className="container">
            <h1>questions</h1>

            {
                questions.map((question) => {

                    return (
                        <Question key={question.id} {...question} />
                    );

                })
            }

        </section>

    );
}

export default Questions;