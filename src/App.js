import { useState } from "react";
import starImage from "./assets/icon-star.svg";
import thanksImage from "./assets/illustration-thank-you.svg";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const[items, setItems] = useState("")
  
  const Button = ({number})=>{
    return(
      <button onClick={()=> setItems(number)} className="btn">{number}</button>
    )
  }

  return (
    <>
    {!isSubmitted &&
      <div className="rating-component">
            <img className="starImage" src={starImage} alt="start image"/>
            <h2>How did we do?</h2>
            <p>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>
            <div className="btn-wraper">
                <Button number={1}/>
                <Button number={2}/>
                <Button number={3}/>
                <Button number={4}/>
                <Button number={5}/>
            </div>
            <button onClick={()=>setIsSubmitted (true)} className="submit-btn">SUBMIT</button>
        </div>
    }
    {isSubmitted && <Thank items={items}/>}
    </>
  );
}
function Thank ({items}){
  return(
    <div className="thanks-components">

      <img src={thanksImage} alt="thanks image"/>
      <p className="selected-p">You selected {items} out of 5</p>
      <h2>Thank you</h2>
      <p>
      We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
      </p>
    </div>
  )
}

export default App;
