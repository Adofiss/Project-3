import React from 'react';
import './App.css';

//Pages
import ViewMatchsPage from './Components/view-matchs/view-matchs';

//Containers
import HomeContainer from './Containers/HomeContainer';
import AddTeamContainer from './Containers/AddTeamContainer';
import ViewMatchsContainer from './Containers/ViewMatchsContainer';
import HandleMatchContainer from './Containers/HandleMatchContainer';
import GenerateBracketContainer from './Containers/GenerateBracketContainer.js';
import GameOverContainer from './Containers/GameOverContainer';
import NavBar from './Components/NavBar/NavBar'
import AuthPage from './Containers/AuthContainer/AuthPage'
import { useState } from 'react'
import { getUser } from './utilities/users-service';

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
          <Router>
          <NavBar user={user} setUser={setUser} />
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