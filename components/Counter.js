import React, { PropTypes } from 'react';
var _ = require('lodash');

export default class Counter extends React.Component {
  static propTypes = {
    counter: PropTypes.object.isRequired
  };

  componentWillMount(){
    let counter = this.props.getDB();
  }
  componentWillReceiveProps(nextProps){
    this.setState({allData: nextProps.counter.data})
  }
  clickHandle(){
    var title = this.state.newArray.toLowerCase();
    var result = 0 ;
    var professionName = [];
    for (var i = 0 ; i < this.state.allData.length; i++){
      var newJSON = JSON.stringify(this.state.allData[i][9]).toLowerCase();
      var jsonSeparated = [];
      jsonSeparated = newJSON.split(" ");
      if(jsonSeparated.includes(title)){
        result += Number(this.state.allData[i][18]);
        professionName.push(newJSON);
      }
    }
    professionName = _.uniq(professionName).toString().split(",");
    this.setState({professionName: professionName});
    var newArray = [];
    if(result!==0){
      this.setState({newResult : result});
    }else{
      document.getElementById("result").innerHTML = "Sorry this database doesn't have that profession."
    }
  }
  getEverything(event){
    var la = event.target.value;
    this.setState({newArray: la});
  }
  render() {
    const { counter } = this.props;
    var profesiToRender = [<label style={{color:"red"}}>Title: </label>, <br/>];
    var newResults = [<label style={{color:"red"}}>Total Earnings: </label>, <br/>];
    var empty = [];
    if( this.state !== null){
      if(this.state.professionName!==undefined){
        for(var i = 0; i < this.state.professionName.length; i++){
          profesiToRender.push(<p style={{textAlign: "center"}}>{this.state.professionName[i]}</p>)
        }}
        if(this.state.newResult!==undefined){
          for(var i = 0 ; i < 1; i++){
            newResults.push(<p style={{textAlign:"center"}}> {this.state.newResult} </p>)
          }
        }
      }
      return (
        <div className="row">
        <div className="col-xs-6 col-md-4 col-md-push-4 col-xs-push-6">
        <form onChange={this.getEverything.bind(this)}>
        <div className="form-group">
        <label for="inputTitle">Enter the title you want to search</label>
        <input type="text" id="InputTitle" className="form-control" placeholder="Enter a title"></input>
        <button type="button" className="btn btn-info btn-lg btn-block" onClick={this.clickHandle.bind(this)}>Search!</button>
        </div>
        </form>
        <div id="result">
        {newResults.length == 2 ? <span></span> : {newResults} }
        </div>
        <div id="professions" >
        {profesiToRender.length==2 ?<span></span>:  this.state.professionName[0].length !== 0 ? {profesiToRender} : <span></span>}
        </div>
        </div>
        </div>
      );
    }
  }
