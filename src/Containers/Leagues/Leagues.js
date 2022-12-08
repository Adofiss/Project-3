import React, {useState, useEffect} from 'react'
import '../../App.css';
import "./Leagues.css"
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'

const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
    headers: {
      'X-RapidAPI-Key': 'f153fa0423msh9800418926a9162p1783d4jsnfd7aca44ac41',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

const Leagues = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.request(options).then(function (response) {
            console.log(response.data.response);
            setData(response.data.response)
        }).catch(err => console.log(err))
        .finally(() => setLoading(false))

    }, []);

    return (
        <div className='Leagues-container'>
            {loading ? (<Spinner animation="grow" variant="success" />
            ) : (
                data.map((data) => (
                    <div key={data.league.id} className="leagues-div">
                    <img src={data.league.logo} alt="#" />
                    <h4>{data.league.name}</h4></div>     
                )
                ))}
        </div>
    )
                }

                export default Leagues