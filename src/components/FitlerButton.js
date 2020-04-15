import React from 'react';
import { connect } from 'react-redux';

const FilterButton = ({ children, onClick, active }) => (
  <button onClick={onClick} disabled={active}>
    {children}
  </button>
);

const mapStateToProps = (state, props) => ({
  active: state.filter === props.filter,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () =>
    dispatch({
      type: 'FILTER_TODO',
      filter: props.filter,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
