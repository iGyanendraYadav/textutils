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
    <div className="container" class="p-3 mb-2 bg-warning text-dark"  style={myStyle}>
      <h1> Visit To My Blog</h1>
      <a href="https://gyanendrayadav.com/blog" class="stretched-link">Take me to the Blog</a>

    </div>
        

    </>
  )
}
