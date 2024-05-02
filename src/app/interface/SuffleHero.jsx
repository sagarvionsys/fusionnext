import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full h-100 px-8 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-bold">
          <h1>  Better every day</h1>

        </span>
        <h3 className="text-4xl md:text-6xl text-red-900 dark:text-red-700 font-serif">
          Learn without limits brighten your <span className="text-indigo-500">Career</span>
        </h3>
        <p className="text-base md:text-lg text-slate-700 dark:text-slate-400 my-4 md:my-6">
          5,000,000 careers advanced
          1,500 live classes every month
          85% report career benefits including promotion or a new job
        </p>
        <button className="bg-indigo-500 text-white dark:text-gray-800 font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_1280.jpg",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
  },
  {
    id: 5,
    src: "https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_1280.png",
  },
  {
    id: 6,
    src: "https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_1280.jpg",
  },
  {
    id: 7,
    src: "https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_1280.jpg",
  },
  {
    id: 8,
    src: "https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_640.png",
  },
  {
    id: 9,
    src: "https://cdn.pixabay.com/photo/2023/02/09/18/42/podcast-7779510_1280.png",
  },
  {
    id: 10,
    src: "https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_640.jpg",
  },
  {
    id: 11,
    src: "https://cdn.pixabay.com/photo/2017/07/19/16/44/questions-2519654_640.png",
  },
  {
    id: 12,
    src: "https://cdn.pixabay.com/photo/2019/12/18/13/56/glasses-4704055_640.jpg",
  },
  {
    id: 13,
    src: "https://cdn.pixabay.com/photo/2020/11/17/13/22/student-5752322_640.png",
  },
  {
    id: 14,
    src: "https://cdn.pixabay.com/photo/2018/05/19/00/53/online-education-3412473_640.jpg",
  },
  {
    id: 15,
    src: "https://cdn.pixabay.com/photo/2021/03/08/09/56/assessment-6078645_640.png",
  },
  {
    id: 16,
    src: "https://cdn.pixabay.com/photo/2022/03/16/09/19/virtual-7071998_640.png",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;