import React from "react";

import "./ResultList.css";

// function ResultList(props) {
//     console.log("here are props: ", props.results);
//   return (
    function ResultList(props) {
        // const { results } = props;
        console.log(props, "props");
        if (props.results.length === 0){
            return (<p>no results found</p>)
        }
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
  
export default ResultList;
