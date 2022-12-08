import React, {useState, useEffect} from 'react'
import '../App.css';
import axios from 'axios'

const Leagues = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios("http://api-football-standings.azharimm.dev/leagues").then(
        (res) => {
            console.log(res.data);
            setData(res.data);
         }
     )
        }, []);

    return (
        <div className='leagues-container'>
            {data ?
        <>{data.map((data) => (
            <div key={data.id} className="league-div">
            </div>
            
        ))} </> : <></>}
        </div>
    )
}

export default Leagues