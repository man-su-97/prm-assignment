import { useState } from "react";
import CardList from "./components/CardList";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}> PRM Fincon</h1>
      <CardList page={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
