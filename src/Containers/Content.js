import React, {useState} from 'react';
import "../App.css";
import Leagues from "./Leagues/Leagues";
import Standings from "./Standings/Standings";

const Content = () => {

  const[active, setActive] = useState(true);

     return (
        <div className="Content">
          <div className="tabs">
            <div className="tab-leagues" onClick={()=>setActive(true)}>
            <h2 style={{ color: active ? "lime" : null}}>Leagues</h2>
          </div>
          <div className="tab-standings" onClick={()=>setActive(false)}>
             <h2 style={{ color: !active ? "lime" : null}}>Standings</h2>
            </div>
          </div>  
          { active ? <Leagues /> : <Standings />}
        </div>
)
}

export default Content;