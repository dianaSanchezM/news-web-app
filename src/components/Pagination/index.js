import React from "react";
import './index.css';

const Pagination = ({ index, setIndex, length }) => {

  const indexArray = [...Array(Math.ceil(length / 10)).keys()];

  return (
    <div className="pagination">
      <button onClick={() => setIndex(0)}>&laquo;</button>
      {indexArray.map((key) => (
        <button className={(key===index)?'active':''} key={key} onClick={() => setIndex(key)}>
          {key+1}
        </button>
      ))}
      <button onClick={() => setIndex(indexArray.length-1)}>&raquo;</button>
    </div>
  );
};

export default Pagination;
