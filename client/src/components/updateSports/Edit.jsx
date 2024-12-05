import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

import toast from 'react-hot-toast';

const Edit= () => {
  const initialSport = {
    team_name: "",
    league: "",
    coach: "",
    stadium: "",
    championship_titles: 0,
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [sport, setSport] = useState(initialSport);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setSport({
      ...sport,
      [name]: name === "championship_titles" ? parseInt(value) || 0 : value,
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getOne/${id}`)
      .then((response) => {
        if (response.data) {
          setSport(response.data);
        } else {
          toast.error("Sport not found", { position: "top-right" });
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error fetching sport details", { position: "top-right" });
      });
  }, [id, navigate]);

  const submitForm = async (e) => {
    e.preventDefault();
    if (!sport.team_name || !sport.league || !sport.coach || !sport.stadium) {
      toast.error("Please fill in all fields", { position: "top-right" });
      return;
    }
    try {
      const response = await axios.put(`http://localhost:8000/api/getUpdate/${id}`, sport);
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/");
    } catch (error) {
      console.error("Error during update:", error);
      toast.error("Failed to update sport", { position: "top-right" });
    }
  };

  return (
    <div className="editSport">
      <Link to={"/"}>Back</Link>
      <h3>Update Sport</h3>
      <form className="editSportForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="team_name">Team Name</label>
          <input
            type="text"
            value={sport.team_name}
            onChange={inputChangeHandler}
            id="team_name"
            name="team_name"
            autoComplete="off"
            placeholder="Team Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="league">League</label>
          <input
            type="text"
            value={sport.league}
            onChange={inputChangeHandler}
            id="league"
            name="league"
            autoComplete="off"
            placeholder="League"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="coach">Coach</label>
          <input
            type="text"
            value={sport.coach}
            onChange={inputChangeHandler}
            id="coach"
            name="coach"
            autoComplete="off"
            placeholder="Coach"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="stadium">Stadium</label>
          <input
            type="text"
            value={sport.stadium}
            onChange={inputChangeHandler}
            id="stadium"
            name="stadium"
            autoComplete="off"
            placeholder="Stadium"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="championship_titles">Championship Titles</label>
          <input
            type="number"
            value={sport.championship_titles}
            onChange={inputChangeHandler}
            id="championship_titles"
            name="championship_titles"
            autoComplete="off"
            placeholder="Number of Championship Titles"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">UPDATE SPORT</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
