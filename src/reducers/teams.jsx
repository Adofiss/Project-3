import Team from '../Models/Team';

import {ADD_TEAM} from '../Constants';

export const teams = (state = [ 
    new Team("England", null),
    new Team("USA", null),
    new Team("Spain", null),
    new Team("Mexico", null),
], action) => {
    switch(action.type) {

        case ADD_TEAM:
            var team = action.team;
            var teams= [...state];
            teams.push(team);
            return teams;

        default:
            return  state
        
    }
} 