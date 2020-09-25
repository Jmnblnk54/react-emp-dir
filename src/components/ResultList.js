import React from "react";

// function ResultList(props) {
//     console.log("here are props: ", props.results);
//   return (
    function ResultList(props) {
        const { results } = props;
        return (
          <table>
            <caption>Employee Directory</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {results.map(results => (
                <tr key={results.name}>
                    <td>{results.name}</td>
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
