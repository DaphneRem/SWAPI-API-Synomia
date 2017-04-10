import React, { Component } from 'react';
import axios from 'axios';
import Result from './Result';

class Select extends Component {

    constructor(props) {
            super(props);
            this.state = {
                data : [],
                query : '',
                showResult : false
        }

        this.showResult = this.showResult.bind(this);
        this.hideResult = this.hideResult.bind(this);

        this.renderResult = this.renderResult.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    componentDidMount() {
      var url = `http://swapi.co/api/films/`;
        axios.get(url).then((response) => {
            this.setState({data : response.data.results});
        });
    }

  handleChange(event) {
      const select = document.getElementById("select");
      let choice = select.selectedIndex;
      this.setState({query : choice});
      this.hideResult();
    }


  showResult() {
            this.setState({showResult : !this.state.showResult});

    }


   hideResult() {
       if ({showResult : true}) {
               this.setState({showResult : false})
               }
    }


  renderResult() {
      return this.state.data.map((e, i) => {
          if (e.url.substr(-2, 1) === this.state.query.toString()) {
          return (<Result
                      key={i}
                      title={e.title}
                      starships={e.starships.length}
                      vehicles={e.vehicles.length}
                  />);
          }
      });
  }


  render() {

      let result = this.renderResult();

    return (
      <div className="Select">

          <select id="select" onChange={this.handleChange}>

              <option onClick={this.hideResult}>Choisissez un Episode</option>

              <option onClick={this.hideResult}>EPISODE I</option>
              <option onClick={this.hideResult}>EPISODE II</option>
              <option onClick={this.hideResult}>EPISODE III</option>
              <option onClick={this.hideResult}>EPISODE IV</option>
              <option onClick={this.hideResult}>EPISODE V</option>
              <option onClick={this.hideResult}>EPISODE VI</option>
              <option onClick={this.hideResult}>EPISODE VII</option>


        </select>

        <button onClick={this.showResult}>Récupérer les données</button>

        <div className="show">

            {this.state.showResult ? result : null}

        </div>

      </div>
    );
  }
}

export default Select;
