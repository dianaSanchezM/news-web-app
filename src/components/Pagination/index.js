import React from "react";
import './index.css';

const Pagination = ({ index, setIndex, length }) => {

  const indexArray = [...Array(Math.ceil(length / 10)).keys()];

  return (
    <div className="pagination">
      <button onClick={() => setIndex(0)}>&lt;&lt;</button>
      <button onClick={() => (index>0)?setIndex(index-1):null}>&lt;</button>
      <>{0 + index * 10} - {10 + index * 10} de {length} noticias</>
      <button onClick={() => (index+1<indexArray.length)?setIndex(index+1):null}>&gt;</button>
      <button onClick={() => setIndex(indexArray.length-1)}>&gt;&gt;</button>
    </div>
  );
};

export default Pagination;
