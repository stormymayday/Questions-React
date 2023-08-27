import { useState } from 'react';
import data from './data.js';

const App = () => {

  const [questions, setQuestions] = useState(data);

  return <h2>Questions</h2>;
};
export default App;
