import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBarLinks from "./navbar_links"

const mapStateToProps = ( {entities, session} ) => ({
    currentUser: entities.users[session.id]
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())

})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarLinks);
