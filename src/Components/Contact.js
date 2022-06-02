import React, {useState} from 'react'



export default function About() {

    const [myStyle, setmyStyle] = useState({
        color : 'white',
        backgroundColor : 'black'
    
    })
    
    const [btnText, setbtnText] = useState("Enable Dark Mode")
    
    
    
    const toggleStyle =() =>{
        if(myStyle.color === 'white'){
            setmyStyle({
                color : 'black',
                backgroundColor : 'white'
            })
            setbtnText("Enable Dark Mode");
        }else{
            setmyStyle({
                color : 'white',
                backgroundColor : 'black',
                border : '1px solid white'
            })
            setbtnText("Enable Light Mode");
        }
    
    }

    
  return (
      <>
 
    <div className="p-3 mb-2 bg-info text-dark" style={myStyle}>


    <h1>To contact the developer ....</h1>
    <h3> Please visit ... https://www.w3schools.com</h3>
    </div>
   
    
    </>
  )
}
