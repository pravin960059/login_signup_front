import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './question.css'
import axios from 'axios';

const HomePage = () => {
  const [question, setQuestion] = useState("Question");
  const [answer, setAnswer] = useState("click the question and submit for the source code");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
data.append('Question', question);

const config = {
  method: 'post',
  url: 'http://127.0.0.1:5000/question_answer',
  data : data
};


axios.request(config)
.then(response => {setAnswer(response.data)
console.log(response.data)
})
.catch((error) => {
  console.log(error);
});
   
  }
  return (
    <div className="question">
      <form onSubmit={handleSubmit} className="questionform" >
      <div className="radioinput">
        
      <h2 className='title'>Choose any one question to get the Source Code</h2>
        <label className='questions_input'>
          <input type="radio" value="Question1" id="one" onChange={(e)=>setQuestion( e.target.value)} checked={question === "Question1"} name="Question" />Finding Prime Number<br/>
          <input type="radio" value="Question2" id="two" onChange={(e)=>setQuestion( e.target.value)} checked={question === "Question2"} name="Question" />Reverse the Number<br/>
          <input type="radio" value="Question3" id="three" onChange={(e)=>setQuestion( e.target.value)} checked={question === "Question3"} name="Question" />leap_year<br/>
          <input type="radio" value="Question4" id="four" onChange={(e)=>setQuestion( e.target.value)} checked={question === "Question4"} name="Question" />Finding Palindrome Number<br/>
          <input type="radio" value="Question5" id="five" onChange={(e)=>setQuestion( e.target.value)} checked={question === "Question5"} name="Question" />Finding Amstrong Number<br/>
        </label>
        </div><br/>
        <div className="submit">
          <label><input type="submit" className="submitbutton" value="submit"/><br/></label>  
          </div>
          
          <button className="button-17" onClick={() => navigate(-1)}>&#8249; back </button>
          
        </form>
        <div className='Answer'>
            <table>
              <tr>
                <td><pre>{answer}</pre></td>
              </tr>
            </table>
          </div>
    </div>
  );
};
export default HomePage;