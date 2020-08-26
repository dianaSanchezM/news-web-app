import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./index.css";
import Pagination from "../Pagination";

const CardsList = ({
  category: { path, name },
  loadingError,
  loadingInProgress,
  news = [],
  fetchNewsList,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    fetchNewsList(path);
  }, [path, fetchNewsList]);

  if (loadingError) {
    return (
      <div className="main">
        <h4>Sorry! There was an error loading the news.</h4>
      </div>
    );
  }

  if (loadingInProgress) {
    return (
      <div className="main">
        <h4>Loading…</h4>
      </div>
    );
  }

  return (
    <div>
      
      <div className="main">
      <Pagination
          index={index}
          length={news.length}
          setIndex={(num) => setIndex(num)}
        />
        <div className="grid">
          {news.slice(0 + index * 10, 10 + index * 10).map((element) => (
            <Card key={element.news_id} data={element} />
          ))}
        </div>

        <Pagination
          index={index}
          length={news.length}
          setIndex={(num) => setIndex(num)}
        />
      </div>
    </div>
  );
};

export default CardsList;
