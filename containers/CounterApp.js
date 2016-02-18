import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';

@connect(state => ({
  counter: state.counter,
  dbEmp : state.dbEmp
}))
export default class CounterApp {
  render() {
    const { counter, dispatch, dbEmp } = this.props;
    console.log("render", this.props);

    return (
      <Counter counter={counter}
               {...bindActionCreators(CounterActions, dispatch)} />
    );
  }
}
