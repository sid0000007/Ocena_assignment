import { usePDF } from 'react-to-pdf';
import { useState, useEffect } from 'react';
import bfee from "./assets/Btech_fee.png"
import mfee from "./assets/Mtech_fee.png"
import "./App.css"

function App() {
  const { toPDF, targetRef} = usePDF({ filename: 'page.pdf' });
  const [name, setName] = useState("");
  const [course, setCourse] = useState("none");
  const [ref, setRef] = useState("A101")
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const [choice, setChoice] = useState(0);



  function controlref() {
    if (course === "M.tech") {
      setRef("B101");
    }
    else {
      setRef("A101");
    }
  }


  function handlesubmit() {
    console.log("submitted");
    if (name === "")
      alert("Please enter the name")
    if (course === "none")
      alert("please select the course")
    if (course !== "none" && name !== "") { alert("submitted"); }

  }

  const handleselect = (e) => {
    setCourse(e.target.value)
    if (e.target.value === "B.TECH") {
      setRef("A101");
    }
    else {
      setRef("B101")
    }

    if (e.target.value === "M.TECH") {
      setChoice(1)
    }
  }


  function consol() {
    console.log(course);
    console.log(name);
  };

  
  return (
    <>
      <div className="user_input scroll-locked align-middle text-center justify-center">
        <div className="username">
          <p className=' my-5'>Name: <input value={name} onChange={(e) => setName(e.target.value)} className=" border-2 border-gray-400 rounded-md" type="text" placeholder="Enter your name..." /></p>
          <p>Course:
            <select value={course} onChange={handleselect} className='border-2 border-gray-400 rounded-md'>
              <option value="">None</option>
              <option value="B.TECH">B.Tech</option>
              <option value="M.TECH">M.Tech</option>
            </select>
          </p>
        </div>

        <div className="flex my-5 align-middle text-center justify-center">
          <button onClick={handlesubmit} className="submit bg-green-600 rounded-md  w-36 h-10 text-sm mx-10">Submit</button>
          <button className='submit bg-blue-500 rounded-md w-36 text-sm' onClick={() => toPDF()}>Generate PDF</button>
        </div>
      </div>




      <div className="data align-middle justify-center mx-40 px-40 py-36" ref={targetRef}>
        <div className="align-middle text-center justify-center text-2xl">
          <h1>Form Details</h1>
        </div>
        <div className="border-2 border-gray-300 p-2 ref">
          Ref:{ref}
        </div>

        <div className="border-2 border-gray-300 p-2 ref">
          Name: {name}
        </div>
        <div className="border-2 border-gray-300 p-2 ref">
          Course: {course}
        </div>

        <div className="border-2 border-gray-300 p-2 ref">
          <p>Date of Offer(current date):{day}/{month}/{year}</p>
        </div>
        <div className="border-2 border-gray-300 p-2 ref">
          <p className='mb-10'>Fee structure:</p>
          {choice === 0 ? (<img className='w-96' src={bfee} alt="" />) :
            (<img className='w-96' src={bfee} alt="" />)}
        </div>
      </div>
    </>
  )
}

export default App
