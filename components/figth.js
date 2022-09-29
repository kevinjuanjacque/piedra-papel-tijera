import React, { useEffect, useState } from 'react';
import OptionGame from './option';

const Fight = ({ option, random, result = 'YOU LOSE', playAgain }) => {
  const [EndAnimation, setEndAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      const animation = document.getElementById('rivals');
      const resultDom = document.getElementById('result');
      animation.classList.remove('opacity-0');
      animation.classList.add('opacity-100');
      resultDom.classList.remove('w-4');
      resultDom.classList.add('w-96');
      setTimeout(() => {
        resultDom.classList.remove('opacity-0');
        resultDom.classList.add('opacity-100');
        setEndAnimation(true);
      }, 500);
    }, 2000);
    return () => {};
  }, []);

  return (
    <div className="flex  transition-all duration-200 ">
      <div>
        <h3 className="text-center font-bold my-10 text-white"> YOU PICKED </h3>
        <OptionGame border={option} />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h1
          id="result"
          className="transition-all duration-500 text-4xl font-extrabold w-4 text-white opacity-0"
        >
          {EndAnimation ? result : ''}
        </h1>
        {EndAnimation && (
          <button
            onClick={playAgain}
            className="mt-5 rounded-md bg-[#fdfbfd] py-2 px-16 text-xs"
          >
            PLAY AGAIN
          </button>
        )}
      </div>
      <div id="rivals" className=" opacity-0 transition-opacity duration-500  ">
        <h3 className="text-center font-bold my-10 text-white">
          {' '}
          THE HOUSE PICKED{' '}
        </h3>

        <OptionGame border={random} />
      </div>
    </div>
  );
};

export default Fight;
