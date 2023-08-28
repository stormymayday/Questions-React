import { useState } from 'react';
import Questions from './components/Questions.jsx';
import data from './data.js';

// Original:
// const App = () => {

//   const [questions, setQuestions] = useState(data);

//   return (
//     <main>
//       <Questions questions={questions} />
//     </main>

//   );

// };

// Alternative:
const App = () => {

  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {

    // If question 'id' is equal to 'activeId', set it to null.
    // Otherwise, set it to 'id'
    const newActiveId = id === activeId ? null : id;

    setActiveId(newActiveId);

  };

  return (
    <main>
      <Questions questions={questions} activeId={activeId} toggleQuestion={toggleQuestion} />
    </main>

  );

};

export default App;
