import { useState } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function App() {
  // useState
  const [index, setIndex] = useState(0);

  // variables
  const { name, job, image, text } = data[index]; //array[i]
  const len = data.length;

  // FUNCTIONS
  const nextButton = () => setIndex((el) => (el + 1) % len);
  const prevButton = () => setIndex((el) => (el - 1 + len) % len);

  const randomButton = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber == index) randomNumber = index + 1; //in case we get same two random numbers in a row
    setIndex(randomNumber % data.length);
  };

  //RETURN
  return (
    <main>
      <article className='review'>
        {/* IMAGE */}
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        {/* TEXT */}
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        {/* BUTTONS */}
        <div className='btn-containter'>
          <button className='prev-btn' onClick={prevButton}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextButton}>
            <FaChevronRight />
          </button>
        </div>
        {/* Random BUTTON */}
        <button className='btn' onClick={randomButton}>
          Surprise me
        </button>
      </article>
    </main>
  );
}
export default App;
