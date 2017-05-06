import { connect } from 'react-redux';
import { closeModal } from '../actions';
import Modal from '../components/Modal';

const mapStateToProps = state => {
  return {
    is_top_modal_open: state.app.is_top_modal_open,
  };
};

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(closeModal());
  }
});

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;
