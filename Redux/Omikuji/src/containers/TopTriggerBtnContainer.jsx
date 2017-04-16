import { connect } from 'react-redux';
import { clickTopTriggerBtn } from '../actions';
import TopTriggerBtn from '../components/TopTriggerBtn';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(clickTopTriggerBtn());
  },
});

const TopTriggerBtnContainer = connect(mapStateToProps, mapDispatchToProps)(TopTriggerBtn);

export default TopTriggerBtnContainer;
