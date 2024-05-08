import { useState } from "react";
import "./App.css";
import "./style.css";
import { useEffect } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [sortData, setSortData] = useState([]);

  const getAllData = async () => {
    const res = await axios("http://localhost:3000/products");
    setData(res?.data);
    setSortData(res?.data);
  };
  useEffect(() => {
    getAllData();
    console.log(getAllData);
  }, []);
  return (
    <>
      {sortData.map((row) => (
        <h1>{row.id}</h1>
      ))}
    </>
  );
}

export default App;
