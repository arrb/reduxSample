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
    for (var i = 0 ; i < this.state.allData.length; i++){
      var newJSON = JSON.stringify(this.state.allData[i][9]).toLowerCase();
      if(newJSON.includes(title)){
        result += Number(this.state.allData[i][18]);
      }
    }
    if(result!==0){
      document.getElementById("result").innerHTML= result;
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
      <div id="result" style={{textAlign: "center"}}>
      </div>
      </div>
      </div>
    );
  }
}
