import React, { useEffect, useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import "../addSports/Add.css"; 
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css';



const Sports = () => {
  const [sport, setSports] = useState([]); // State is sport (singular), not Sports (plural)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getAll");
      setSports(response.data);  // Set the data in state
    };
    fetchData();
  }, []);

  const deleteSport = async (sportId) => {
    await axios.delete(`http://localhost:8000/api/deleteSports/${sportId}`)
      .then((response) => {
        setSports((prevSports) => prevSports.filter((sport) => sport._id !== sportId));  // Filter out the deleted sport
        toast.success(response.data.msg, { position: 'top-right' });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="SportsTable">
      <Link to={"/add"} className="addButton">Add Sport</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Team Name</th>
            <th>League</th>
            <th>Coach</th>
            <th>Stadium</th>
            <th>Championship Titles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            sport.map((sport, index) => (  // Use 'sport' here (singular)
              <tr key={sport._id}>
                <td>{index + 1}</td>
                <td>{sport.team_name}</td>
                <td>{sport.league}</td>
                <td>{sport.coach}</td>
                <td>{sport.stadium}</td>
                <td>{sport.championship_titles}</td>
                <td className="actionButtons">
                  <button onClick={() => deleteSport(sport._id)}>
                    <i className="fa-solid fa-trash">Delete</i>
                  </button>
                  
                  <Link to={`/edit/${sport._id}`}>
                    <i className="fa-solid fa-pen-to-square">Edit</i>
                  </Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Sports;
