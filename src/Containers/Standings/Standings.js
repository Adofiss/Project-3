import React, {useState, useEffect} from 'react'
import '../../App.css';
import "./Standings.css"
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'

const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
    params: {season: '2020', league: '39'},
    headers: {
      'X-RapidAPI-Key': 'f153fa0423msh9800418926a9162p1783d4jsnfd7aca44ac41',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  const Standings = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedLeague, setSelectedLeague] =useState("eng.1");
    const [selectedYear, setSelectedYear] =useState("2021");

    useEffect(() => {
        setLoading(true)
        axios.request(options).then(function (response) {
            console.log(response.data.response);
            setData(response.data.response)
        }).catch(err => console.log(err))
        .finally(() => setLoading(false))

    }, []);



    return(
        <div className='Standings-container'>

            <div className='select-container'>
                <select
                name="select-league"
                id="select-league"
                defaultValue={selectedLeague}
                onChange={(e) => setSelectedLeague(e.target.value)} >
                    <option value="arg.1">Argentine Liga Profesional de Fứtbol</option>
                    <option value="aus.1">Australian A_League</option>
                    <option value="bra.1">Brazilian Serie A</option>
                    <option value="chn.1">Chinese Super League</option>
                    <option value="ned.1">Dutch Eredivisie</option>
                    <option value="eng.1">English Premier League</option>
                    <option value="fra.1">French Ligue 1</option>
                    <option value="ger.1">German Bundesliga</option>
                    <option value="idn.1">Indonesian Liga 1</option>
                    <option value="ita.1">Italian Serie A</option>
                    <option value="jpn.1">Japanese J League</option>
                    <option value="mys1">Malaysian Super League</option>
                    <option value="mex.1">Mexican Liga BBVA MX</option>
                    <option value="por.1">Portuguese Liga</option>
                    <option value="rus.1">Russian Premier League</option>
                    <option value="sgp.1">Singaporean Premier League</option>
                    <option value="esp.1">Spanish Primera División</option>
                    <option value="tha.1">Thai Premier League</option>
                    <option value="tur.1">Turkish Super Lig</option>
                    <option value="uga.1">Ugandan Super League</option>
                </select>
                <select
                name="select-year"
                id="select-year"
                onChange={(e) => setSelectedYear(e.target.value)} >
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div className="standings-results">
            {loading ? (<Spinner animation="grow" variant="success" />
            ) : (
                data.map((data, index) =>
                <div key={data.team.id} className="standing-info-div">
                    {/* <h1>
                        <span>
                            {`${index + 1},`}
                            <img src={data.team.logos[0].href} alt="#" style={{width:"50px"}} />
                        </span>
                        {data.team.shortDisplayName}
                    </h1> */}
            </div>)
            )
           }
         </div>
        </div>
    )


  }

export default Standings