import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
var _ = require('lodash');
import { connect } from 'react-redux';
import { getDB } from '../../actions/dbEmp';
import  './employeeCSS.css';
import {Row,Col, Grid} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './tableCSS/react-bootstrap-table-all.min.css';

export default class EmployeeUI extends Component {
  componentWillMount(){
    let counter = this.props.dispatch(getDB());
  }
  componentWillReceiveProps(nextProps){
    this.setState({allData: nextProps.dataEmp})
  }
  clickHandle(){
    var title = this.state.newArray.toLowerCase();
    var result = 0 ;
    var professionName = [];
    var newData = []
    for (var i = 0 ; i < this.state.allData.length; i++){
      var newJSON = JSON.stringify(this.state.allData[i][9]).toLowerCase();
      var jsonSeparated = [];
      jsonSeparated = this.state.allData[i][9].toLowerCase().split(" ");
      if(jsonSeparated.includes(title)){
        result += Number(this.state.allData[i][18]);
        newData.push( {"title" : this.state.allData[i][9], "totalEarnings" : this.state.allData[i][18]});
        professionName.push(newJSON);
      }
    }
    newData = _.uniq(newData)
    this.setState({newData : newData});
    professionName = _.uniq(professionName).toString().split(",");
    this.setState({professionName: professionName});
    var newArray = [];
    if(result!==0){
      this.setState({newResult : result});
    }else{
      var strinNo = "Sorry this title doesn't exist on this database";
      this.setState({newResult : strinNo});
    }
  }
  getEverything(event){
    var la = event.target.value;
    this.setState({newArray: la});
  }
  mySortFunc(a, b, order){
    return a.count - b.count;
  }
  render() {
    const { dataEmp, getDB } = this.props;
    var profesiToRender = [];
    var newResults = [];
    if( this.state !== null){

      if(this.state.professionName!==undefined){
        if(this.state.professionName.length!==1){
          profesiToRender = [<label style={{color:"red", marginLeft: "100px"}}>Title: </label>, <br/>];
          for(var i = 0; i < this.state.professionName.length; i++){
            profesiToRender.push(<p style={{textAlign: "center"}} key={i}>{this.state.professionName[i]}</p>)
          }
        }
      }

      if(this.state.newResult!==undefined){
        if(this.state.newResult !== "Sorry this title doesn't exist on this database"){
          newResults = [<label style={{color:"red"}}>Total Earnings: </label>, <br/>]
          for(var i = 0 ; i < 1; i++){
            newResults.push(<p style={{textAlign:"center"}}> {this.state.newResult} </p>)
          }
        }
        else{
          newResults.push(<p style={{textAlign:"center"}}>{this.state.newResult}</p>)
        }
      }
    }
    return (
      <Grid>
      <Row>
      <Col >
      <Row>
      <Col className="col-xs-6 col-md-4 col-md-push-4 col-xs-push-6">
      <form onChange={this.getEverything.bind(this)}>
      <div className="form-group">
      <label for="inputTitle">Enter the title you want to search</label>
      <input type="text" id="InputTitle" className="form-control" placeholder="Enter a title"></input>
      <button type="button" className="btn btn-info btn-lg btn-block" onClick={this.clickHandle.bind(this)}>Search!</button>
      </div>
      </form>
      <div id="result">
      {newResults}
      </div>
      </Col>
      </Row>
      <Row className="show-grid">
      <Col md={6} mdPush={6}>{profesiToRender}</Col>
      <Col md={6} mdPull={6}>
      {
        this.state!== null ?
        this.state.newData!== undefined ?
        <BootstrapTable data={this.state.newData} pagination={true} height="400" >
        <TableHeaderColumn dataField="title" isKey={true}>Title</TableHeaderColumn>
        <TableHeaderColumn dataField="totalEarnings">Total Earnings</TableHeaderColumn>
        </BootstrapTable>
        :
        <span></span>
        :
        null
      }
        </Col>
        </Row>

        </Col>

        </Row>
        </Grid>
      );
    }
  }
  function mapStateToProps(state) {
    const { dataEmp } = state;
    return {
      dataEmp: state.dataEmp
    };
  }

  export default connect(mapStateToProps)(EmployeeUI);
