import React from "react";

import { connect } from "react-redux";
import { activity, eat, nap, play } from "../redux/actions/activity";

const Activity = ({ activity, eat, nap, play }) => {
    return (
        <div>
            <h2>The cat is {activity}</h2>
            <button onClick={() => eat()}>EATING</button>
            <button onClick={() => nap()}>NAP</button>
            <button onClick={() => play()}>PLAY</button>
        </div>
    );
};

// This is the Subscriber!!
// It listens for changes in state
// It subscribes to the state changes
const mapStateToProps = state => {
    const { activity } = state;
    return activity;
};

// This is the dispatcher!!!
// it dispatches the actions to redux
const mapDispatchToProps = dispatch => {
    return {
        eat: () => dispatch(eat()),
        nap: () => dispatch(nap()),
        play: () => dispatch(play())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Activity);
