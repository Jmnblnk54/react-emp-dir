import React from "react";

import "./ResultsList.css";

function FilteredResults(props) {
    const { products } = props;
    let sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return (
        <table class="center">
        <caption>Employee Directory</caption>
        <thead>
            <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {props.results.map(results => (
                // console.log("results are ", results)
            <tr key={results.name.first}>
                <td><img src={results.picture.thumbnail} alt=""></img></td>
                <td>{results.name.last}, {results.name.first}</td>
                <td>{results.gender}</td>
                <td>{results.email}</td>
                <td>{results.phone}</td>
            </tr>
            ))}
        </tbody>
      </table>
    );
  }

export default FilteredResults;