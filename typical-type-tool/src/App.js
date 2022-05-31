import './App.css';
import Typical from 'react-typical'

function App() {
  const text=[
    "If I had never met you, I never would have become a fan of yours",
    "I'd never have known",
    "and you would have never known that I was a fan of yours",
    "and I would have never known that you were a fan of mine"
  ]
  return (
    <div className="">
      <p>
        <Typical
        // loop={1}
        // wrapper='p'
        steps= {[
          text[0],
          500, 
          text[1],
          500,
          text[2],
          500,
          text[3],
          500,
          ]}/>
      </p>
    </div>
  );
}

export default App;
