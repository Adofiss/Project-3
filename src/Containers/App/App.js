import './App.css';
import AuthPage from '../AuthContainer/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
// import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
import { getUser } from '../../utilities/users-service';
import HomeContainer from './HomeContainer.jsx';
import AddTeamContainer from './AddTeamContainer.jsx';
import ViewMatchsContainer from './ViewMatchsContainer.jsx';
import HandleMatchContainer from './HandleMatchContainer.jsx';
import GenerateBracketContainer from './GenerateBracketContainer.jsx';
import GameOverContainer from './GameOverContainer';
// import ViewMatchsPage from '../../Components/view-matchs/view-matchs';
// import { useState } from 'react';

//Import Routing
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  const [user, setUser] = useState (getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Router>
          <div>
            <Routes>
               <Route path="/" element={<HomeContainer />}/>
               <Route path='/add-team' element = {<AddTeamContainer />}/>
               <Route path = '/view-matchs' element = {<ViewMatchsContainer />}/>
               <Route path = '/handle-match' element = {<HandleMatchContainer />}/>
               <Route path = '/generate-bracket' element = {<GenerateBracketContainer />}/>
               <Route path = '/game-over' element = {<GameOverContainer />}/>
               <Route path = '/view-match' element = {<ViewMatchsPage />}/>
               </Routes>
        </div>
        </Router>

        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
