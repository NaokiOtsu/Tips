import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => ({
  hoge: state.taskReducer.tasks
})

export default connect(
  mapStateToProps
)(App);
