import {connect} from 'react-redux';

import AddTeamPage from '../Components/add-team/add-team';
import { addTeam } from '../Actions';

const mapStateToProps = state => ({
   
})

const mapDispatchToProps = dispatch => ({
    addTeam: (team) => {
        dispatch(addTeam(team));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTeamPage)