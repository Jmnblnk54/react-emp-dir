import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./resultsList/ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            search: "",
            results: []
          };
          this.searchEmp = this.searchEmp.bind(this);
          this.handleFormSubmit = this.handleFormSubmit.bind(this);
          this.handleInputChange = this.handleInputChange.bind(this);
    }
  

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchEmp();
  }

  searchEmp = () => {
    API.search()
      .then(res => 
      this.setState({ results: res.data.results })
      )
      .catch(err => console.log(err));
      
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmp(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
