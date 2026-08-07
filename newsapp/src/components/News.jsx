import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        props.setProgress(10);
        setLoading(true);
        setError(null);

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&page=1&pageSize=${props.pageSize}&apiKey=${props.apiKey}`;

        const response = await fetch(url);
        props.setProgress(30);
        const parsedData = await response.json();

        const newArticles = parsedData.articles || [];
        const total = parsedData.totalResults || 0;

        setArticles(newArticles);
        setTotalResults(total);
        setPage(1);
        setHasMore(newArticles.length < total);
      } catch (err) {
        console.error("News fetch failed:", err);
        setError("Unable to load news. Please try again later.");
      } finally {
        setLoading(false);
        props.setProgress(100);
      }
    };

    fetchArticles();
  }, [props.category, props.pageSize, props.apiKey, props.setProgress]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&page=${nextPage}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`;

    try {
      props.setProgress(30);
      const response = await fetch(url);
      props.setProgress(60);
      const parsedData = await response.json();
      props.setProgress(100);

      const nextArticles = parsedData.articles || [];
      const newArticles = [...articles, ...nextArticles];

      setPage(nextPage);
      setArticles(newArticles);
      setHasMore(true);
    } catch (err) {
      console.error("News fetchMoreData failed:", err);
      setHasMore(true);
    }
  };

  return (
    <div className="container news-container py-4">
      <div className="hero-section">
        <h1 className="hero-title">{capitalizeFirstLetter(props.category)} News</h1>
        <p className="hero-subtitle">
          Stay updated with the latest headlines from around the world.
        </p>
      </div>
{loading ? (
  <Spinner />
) : error ? (
  <div className="alert alert-warning text-center" role="alert">
    {error}
  </div>
) : (
  <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    hasMore={articles.length < totalResults}
    loader={<Spinner />}
  >
    <div className="row g-4">
      {articles.map((article) => (
        <div className="col-md-4" key={article.url}>
          <NewsItem
            title={article.title}
            description={article.description}
            imageUrl={article.urlToImage}
            newsUrl={article.url}
            author={article.author}
            source={article.source?.name}
            publishedAt={article.publishedAt}
            category={props.category}
          />
        </div>
      ))}
    </div>
  </InfiniteScroll>
)}
    </div>
  );
};

export default News;
