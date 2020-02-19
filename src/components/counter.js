import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button onClick={dec} className="btn btn-danger btn-lg">
        DEC
      </button>
      <button onClick={inc} className="btn btn-primary btn-lg">
        INC
      </button>
      <button onClick={rnd} className="btn btn-warning btn-lg">
        RND
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

export default connect(
  mapStateToProps,
  actions
)(Counter);

/*const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);*/
