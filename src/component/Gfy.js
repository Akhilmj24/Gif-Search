import axios from "axios";
import React, { useEffect, useState } from "react";

export const Gfy = () => {
  const [gif, setgif] = useState([]);
  const [search, setSearch] = useState("thor");
  const [inputData, setInputData] = useState("");
  console.log(search + "search");
  console.log(inputData + "input");

  useEffect(() => {
    async function apiData() {
      const apiData = await axios(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: "SvWihUEgry9kjzpxM7duseVFcI98gJMg",
          q: search,
          limit: 100,
        },
      });

      setgif(apiData.data.data);
      return apiData;
    }
    apiData();
  }, [search]);

  const searchData = () => {
    setSearch(inputData);
  };

  return (
    <div className="main-container">
      <div className="header">
        <div className="form">
          <input
            type="text"
            placeholder="Search"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button onClick={() => searchData()}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      {gif.map((gif) => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt="" />
      ))}
    </div>
  );
};
