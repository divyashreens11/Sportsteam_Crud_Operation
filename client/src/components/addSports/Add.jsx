import React ,{useState} from 'react';
import axios from 'axios';
import './Add.css';

import toast from 'react-hot-toast';
import {Link,useNavigate} from 'react-router-dom';

//created a container
const Add = () => {
  const sports = {
    team_name: "",
    league: "",
    coach: "",
    stadium: "",
    championship_titles: "",
  }

  const [sport, setSports] = useState(sports);
  const navigate = useNavigate();

  const inputHandler = (e)=>{
    const{ name, value } = e.target;
    setSports({ ...sport, [name]: value});
  }

    const submitForm = async(e) =>{
        e.preventDefault();
        await axios.post( "http://localhost:8000/api/create",sport)
        .then((res) => {
            toast.success(res.data.msg,{ position:"top-right" });
            navigate("/")
        })
        .catch(error=>console.error(error))
        
    }



  return (
    <div>
        <Link to="/">Back</Link>
      <h1>TEAM 9 SPORTS</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="team_name">Team Name</label>
          <input
            type="text"
            onChange={inputHandler}
            id="team_name"
            name="team_name"
            placeholder="Team Name"
          />
        </div>

        <div>
          <label htmlFor="league">League</label>
          <input type="text" 
          onChange={inputHandler} 
          id="league" 
          name="league" 
          placeholder="League" />
        </div>

        <div>
          <label htmlFor="coach">Coach</label>
          <input type="text" 
          onChange={inputHandler} 
          id="coach" 
          name="coach" 
          placeholder="Coach" />
        </div>

        <div>
          <label htmlFor="stadium">Stadium</label>
          <input
            type="text"
            onChange={inputHandler}
            id="stadium"
            name="stadium"
            placeholder="Stadium"
          />
        </div>

        <div>
          <label htmlFor="championship_titles">Championship Titles</label>
          <input
            type="number"
            onChange={inputHandler}
            id="championship_titles"
            name="championship_titles"
            placeholder="Championship Titles"
          />
          <div>
            <button type="submit">Add SportsTeam</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;


