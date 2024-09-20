import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import LoadingSpinner from "./LoadingSpinner";

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center mt-3 mb-3">
        Latest <span className="badge bg-warning">News</span>
      </h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })
      )}
    </div>
  );
}

export default NewsBoard;
