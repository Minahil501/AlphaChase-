import { MdOutlineDarkMode } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import {FiguresContext } from "../contexts/Figures";

function Game() {
  const [choice, setChoice] = useState("");
  const [word, setWord] = useState("");
  const [hiddenWord, setHiddenWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const {setFiguredata}= useContext(FiguresContext);
  const [hint, setHint] = useState("");


  const categories = ["ANIMALS", "SPORTS", "FRUITS", "COUNTRY","CARS","TV_SHOWS"];

const words = {
  ANIMALS: [
    { word: "TIGER", hint: "A big striped cat" },
    { word: "ELEPHANT", hint: "The largest land animal" },
    { word: "GIRAFFE", hint: "Tallest animal with a long neck" },
    { word: "LION", hint: "Known as the king of the jungle" },
    { word: "ZEBRA", hint: "Striped black-and-white animal" },
  ],
  SPORTS: [
    { word: "CRICKET", hint: "Bat-and-ball game popular in South Asia" },
    { word: "FOOTBALL", hint: "Also called soccer" },
    { word: "TENNIS", hint: "Played with racket and yellow ball" },
    { word: "HOCKEY", hint: "Played with sticks on ice or field" },
    { word: "GOLF", hint: "Played with clubs and small white balls" },
  ],
  FRUITS: [
    { word: "APPLE", hint: "Keeps the doctor away" },
    { word: "BANANA", hint: "A long yellow fruit" },
    { word: "MANGO", hint: "Known as the king of fruits" },
    { word: "ORANGE", hint: "Citrus fruit, also a color" },
    { word: "GRAPES", hint: "Used to make wine" },
  ],
  COUNTRY: [
    { word: "PAKISTAN", hint: "Country with the Indus River" },
    { word: "BRAZIL", hint: "Famous for football and carnival" },
    { word: "JAPAN", hint: "Land of the rising sun" },
    { word: "FRANCE", hint: "Eiffel Tower is here" },
    { word: "CANADA", hint: "Known for maple syrup" },
  ],
  CARS: [
    { word: "FERRARI", hint: "Italian luxury sports car" },
    { word: "LAMBORGHINI", hint: "Italian brand with bull logo" },
    { word: "PORSCHE", hint: "German high-performance cars" },
    { word: "TESLA", hint: "Electric car company by Elon Musk" },
    { word: "MEHRAN", hint: "Famous budget car in Pakistan" },
  ],
  TV_SHOWS: [
    { word: "FRIENDS", hint: "A sitcom about 6 buddies in New York" },
    { word: "STRANGERTHINGS", hint: "Kids face supernatural forces" },
    { word: "PEAKYBLINDERS", hint: "British gang drama series" },
    { word: "SHERLOCKHOLMES", hint: "Detective show with Benedict Cumberbatch" },
    { word: "SQUIDGAME", hint: "Deadly survival game from Korea" },
  ],
};

  const [bg, setBg] = useState({
    body: "#555654",
    rest: "black",
    text: "white",
  });

  // Theme toggle
  const toggle = () => {
    if (bg.body === "#555654") {
      setBg({ body: "black", rest: "#ca8a04", text: "#FFEDD5" });
    } else {
      setBg({ body: "#555654", rest: "black", text: "black" });
    }
  };

  // Start new game
const handleChoice = (c) => {
  setChoice(c);

  const randomObj = words[c][Math.floor(Math.random() * words[c].length)];
  
  setWord(randomObj.word);   
  setHint(randomObj.hint);   
  
  setHiddenWord("_ ".repeat(randomObj.word.length).trim()); 
  setGuessedLetters([]);
  setWrongGuesses([]);
  setAttempts(0);
  setGameOver(false);
  setTimeTaken(0);
};


  // Timer effect
  useEffect(() => {
    let timer;
    if (choice && !gameOver) {
      timer = setInterval(() => {
        setTimeTaken((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [choice, gameOver]);

  // Guess handler
  const handleGuess = (letter) => {
    if (gameOver || guessedLetters.includes(letter) || wrongGuesses.includes(letter)) return;

    if (word.includes(letter)) {
      const newHidden = word
        .split("")
        .map((ch) => (guessedLetters.includes(ch) || ch === letter ? ch : "_"))
        .join(" ");
      setGuessedLetters([...guessedLetters, letter]);
      setHiddenWord(newHidden);

      if (!newHidden.includes("_")) {
        setGameOver(true);
       setFiguredata((prev) => ({
    ...prev,
    win: prev.win + 1,
    total: prev.total + 1,
    time: timeTaken,
  }));
      }
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setWrongGuesses([...wrongGuesses, letter]);
      if (newAttempts >= 3) {
        setGameOver(true);
      setFiguredata((prev) => ({
    ...prev,
    losses: prev.losses + 1,
    total: prev.total + 1,
    time: timeTaken,
  }));
      }
    }
  };

  return (
    <div
      className="min-h-screen w-screen transition-colors duration-300 bg-[`${bg.body}]"
      style={{ backgroundColor: bg.body }}
    >
      {/* Header */}
      <div className="w-full flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl sm:text-3xl font-bungee text-orange-100">
          Alpha
          <span className="inline-block animate-bounce text-yellow-600">C</span>
          hase
        </h1>
        <div className="flex gap-2">
          <MdOutlineDarkMode
            style={{ color: bg.rest }}
            className="text-2xl sm:text-3xl cursor-pointer"
            onClick={toggle}
          />
          <Link to="/Dashboard">
            <VscGraph style={{ color: bg.rest }} className="text-2xl sm:text-3xl cursor-pointer" />
          </Link>
          <Link to="/">
            <HiOutlineHome style={{ color: bg.rest }} className="text-2xl sm:text-3xl cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Game Section */}
      <div className="flex flex-col h-full text-orange-100">
        <p className="text-2xl sm:text-4xl italic px-10 text-center">
          Guess the word letter by letter
        </p>

        {/* Category Selection */}
    <div className="flex flex-col items-center mt-6">
  {/* Title */}
  <p className="text-2xl italic text-yellow-600 font-semibold mb-6 drop-shadow-md">
    Choose a category
  </p>

  {/* Buttons */}
  <div className="flex gap-3 flex-wrap justify-center">
    {categories.map((c) => (
      <button
        key={c}
        onClick={() => handleChoice(c)}
        className={`px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full font-semibold transition duration-300 shadow-md ${
          choice === c
            ? "bg-yellow-600 text-white border-2 border-orange-100 scale-105 shadow-lg"
            : "border-2 border-orange-100 text-yellow-600 hover:bg-yellow-600 hover:text-orange-100 hover:scale-105"
        }`}
      >
        {c}
      </button>
    ))}
  </div>
</div>

        {/* If a word is selected */}
        {choice && (
          <div className="mt-6 text-center">
            <p className="text-xl">
              You selected:{" "}
              <span className="font-bold text-yellow-600">{choice}</span>
            </p>
            <p className="mt-4  text-xl sm:text-2xl italic font-bold text-[#E37EDF] animate-pulse ">
      💡 Hint: {hint}
    </p>
            <p className="mt-10  text-5xl sm:text-7xl tracking-normal">{hiddenWord}</p>

            {/* Letter Input Buttons */}
            {!gameOver && (
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
                  <button
                    key={letter}
                    onClick={() => handleGuess(letter)}
                    disabled={
                      guessedLetters.includes(letter) || wrongGuesses.includes(letter)
                    }
                    className={`h-12 w-12 rounded-xl text-2xl mt-2 font-bold transition ${
                      guessedLetters.includes(letter)
                        ? "bg-green-700 text-white"
                        : wrongGuesses.includes(letter)
                        ? "bg-red-900 text-white"
                        : "bg-orange-100 text-black hover:bg-yellow-600"
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            )}

            {/* Wrong guesses */}
            <div className=" my-8 flex flex-row justify-around">
            <p className=" text-xl sm:text-3xl text-yellow-600">
              Wrong guesses: {wrongGuesses.join(", ")} ({attempts}/3)
            </p>
             <p className=" text-xl sm:text-3xl text-yellow-600">
              ⏱ Time: {timeTaken}s
            </p>
            </div>

            {/* Game Over Message */}
            {gameOver && (
              <div className="mt-6">
                {attempts >= 3 ? (
                  <p className="text-2xl sm:text-5xl text-red-500">
                    ❌ Failed! Word was: {word}
                  </p>
                ) : (
                  <p className="text-2xl sm:text-5xl text-green-500">
                    🎉 You guessed it in {timeTaken}s!
                  </p>
                )}
                <div className="flex flex-col items-center justify-center my-6 gap-4" >
                <button
  onClick={() => handleChoice(choice)}
  className="w-52 py-2 text-xl font-bold bg-yellow-600 text-orange-100 rounded-full hover:shadow-md hover:shadow-amber-100"
>
  Try Again
</button>

<Link
  to="/Dashboard"
  className="w-52 py-2 mb-56 text-xl font-bold bg-yellow-600 text-orange-100 rounded-full hover:shadow-md hover:shadow-amber-100 text-center"
>
  Achievements
</Link>

              </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
