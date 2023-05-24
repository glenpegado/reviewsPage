import { useState } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function App() {
  // useState
  const [index, setIndex] = useState(0);

  // variables
  const { name, job, image, text } = data[index]; //array[i]

  // FUNCTIONS
  const checkNumber = (number) => {
    if (number > data.length - 1) return 0;
    if (number < 0) return data.length - 1;
    return number;
  };
  const prevButton = () => setIndex((el) => checkNumber(el - 1));
  const nextButton = () => setIndex((el) => checkNumber(el + 1));
  const randomButton = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    //in case we get same two random numbers in a row
    if (randomNumber == index) randomNumber = index + 1;
    setIndex(checkNumber(randomNumber));
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