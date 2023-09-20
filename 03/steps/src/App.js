import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

export default function App() {
  let curDate = new Date().toDateString();
  console.log(curDate);

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function postaviCountPlus() {
    setCount((s) => s + step);
  }
  function postaviCountMinus() {
    setCount((s) => s - step);
  }
  return (
    <>
      <div className="con">
        <button
          className="dugme"
          onClick={(s) => setStep((s) => (s > 1 ? s - 1 : s))}
        >
          -
        </button>
        <h3>Step: {step}</h3>
        <button className="dugme" onClick={(s) => setStep((s) => s + 1)}>
          +
        </button>
      </div>
      <div className="con">
        <button className="dugme" onClick={postaviCountMinus}>
          -
        </button>
        <h3>Count: {count}</h3>
        <button className="dugme" onClick={postaviCountPlus}>
          +
        </button>
      </div>
      <div>
        <h3>
          {count}{" "}
          {count === 0
            ? "Today is"
            : count > 0
            ? "days from today is"
            : "days ago"}{" "}
          {date.toDateString()}
        </h3>
      </div>
    </>
  );
}

// export default function App2() {
//   const [step, setStep] = useState(1);

//   const [isOpen, setIsOpen] = useState(true);

//   function handlePrevious() {
//     if (step > 1) setStep((s) => s - 1);
//   }
//   function handleNext() {
//     if (step < 3) setStep((s) => s + 1);
//   }
//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen((is) => !is)}>
//         &times;
//       </button>
//       {isOpen ? (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>
//           <p className="message">
//             Step {step}: {messages[step - 1]}
//           </p>
//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// }
