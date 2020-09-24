import React from "react";

function ResultList(props) {
    console.log("here are props: ", props);
  return (
    <ul className="list-group">
      {/* {props.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        </li>
      ))} */}
      <li>

      </li>
    </ul>
  );
}

export default ResultList;
