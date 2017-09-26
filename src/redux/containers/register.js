import { signUpUser, clearState } from '../actions/authentification';
import { connect } from 'react-redux';

const mapStateToProps = ({ auth }) => {
    const { error, loading, user } = auth;

    return { authError: error, loading, user };
};

export default connect(mapStateToProps, { signUpUser, clearState })(Signup);
