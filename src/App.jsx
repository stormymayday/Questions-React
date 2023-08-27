import { useState } from 'react';
import Questions from './components/Questions.jsx';
import data from './data.js';

const App = () => {

  const [questions, setQuestions] = useState(data);

  return (
    <Questions />
  );
};
export default App;
