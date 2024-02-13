import useApiData from "../hooks/useApiData";
import Card from "./Card";

const CardList = ({ page, onPageChange }) => {
  const apiUrl = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`;
  const { data, error } = useApiData(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div style={{ margin: "50px 200px" }}>
      {data.map((post) => (
        <Card key={post.id} title={post.title} body={post.body} />
      ))}
      <div>
        <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>{`Page ${page}`}</span>
        <button onClick={() => onPageChange(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default CardList;
