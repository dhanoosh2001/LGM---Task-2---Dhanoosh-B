import React, { useState } from "react";
import "./App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF,faGithub,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";

function App() {

  const [isDataFetched,setDataFetch]=useState(false);
  const [users, setUsers] = useState([]);
  const [isButtonClick,setBtnclick] = useState(false);

  const userInfo = async () => {
    setBtnclick(true);
    const response = await fetch("https://reqres.in/api/users?page=1");

    const jsonresponse = await response.json();

    setUsers(jsonresponse.data);
    setInterval(() => {
      setDataFetch(true);
    }, 1500);
  };

  return (
    <>
      <div className="navbar">
        <header>
        <h2 >Welcome! </h2> 
        <button onClick={userInfo}>Get Users</button>
        </header>
      </div>

{
    isButtonClick?(
      isDataFetched?(
      <div className="grid">
        {users.map(({ id, first_name, last_name, avatar, email }) => {
        return(
          <>
          <div className="container">
            <div className="card">
            <div className='layer'></div>
              <div className="content">
                <div className="imgbx">
              <img src={avatar}></img>
            </div>
            <hr></hr>
            <div className="content-box">
              <h3 className="name">{first_name} {last_name}</h3>
              <p>{email}
             </p>
              
            </div>
            </div>
            <div className='sci'>
            
            <a className='btn' href="#"> <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>           
            <a className='btn' href="#">  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>           
            <a className='btn' href="#">  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>           
            <a className='btn' href="#">  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>            </div>
          </div>
          </div>
          </>
        )})
}
      
      </div>
        ):(
      
      <div className="loading"><p>Loading.....</p></div>
        )
    // ):()
    ):(

  <><body></body></> )
}
    </>
  );
}

export default App;