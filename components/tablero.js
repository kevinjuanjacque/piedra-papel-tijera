import Image from 'next/image';
import { useEffect, useState } from 'react';

const Tablero = ({ score }) => {
  const [Score, setScore] = useState(score);
  useEffect(() => {
    setScore(score);

    return () => {};
  }, [score]);

  return (
    <main className="flex flex-col justify-center items-center ">
      <div className=" rounded-lg border border-[#5d6a85] h-32 w-6/12 mt-10 flex justify-between p-5">
        <Image width={150} height={'100%'} alt="logo" src="/assets/logo.svg" />
        <div className="bg-[#fbfbfb] h-full aspect-[4/3] rounded-md text-[#56556a] flex flex-col justify-center items-center">
          <p className="text-center text-sm">SCORE</p>
          <h1 className="font-bold text-5xl">{Score}</h1>
        </div>
      </div>
    </main>
  );
};

export default Tablero;
