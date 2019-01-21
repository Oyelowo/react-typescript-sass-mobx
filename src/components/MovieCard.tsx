import React, { Children, useState } from "react";
import axios from "axios";
import "./MovieCard.scss";

/* interface props {
  genre?: string;
  language?: string;
  image?: string;
  officialSite?: string;
  rating?: string;
  schedule?: object;
  type?: string;
  summary?: any;
  url?: string;
  updated?: Date;
  weight?: Number;
  children?: JSX.Element;
} */

const MovieCard = () => {
  const [value, setValue] = useState("");
  const [apiData, setApiData] = useState({
    summary: "",
    image: { original: "" },
    officialSite: ""
  });
  const [error, setError] = useState({
    errorOccured: false,
    message: "Not Found"
  });
  const [showModal, setShowModal] = useState(false);

  const createMarkup = () => {
    console.log(apiData.summary)
    const summary = apiData.summary
      .split(". \| ?")
      .slice(0, 1)
      .join(".");
    return { __html: summary };
  };

  const inputRef = React.createRef<HTMLInputElement>();

  const handleChange = (e: any) => {
    //: React.FormEvent<HTMLInputElement>
    setValue(e.target.value);
    setError({
      errorOccured: false,
      message: ""
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://api.tvmaze.com/singlesearch/shows?q=${value}`
      );
      setApiData(response.data);

      console.log(apiData);
    } catch (error) {
      setError({
        errorOccured: true,
        message: "Something went wrong while fetching the data"
      });
      console.log("######", error);
    }
  };

  const handleShowModal =  () => {
    setShowModal(true)
  }
  

  return (
    <div id="all">
    {showModal ? <div style={{width: "60vw", height: "70vh", position:"absolute", zIndex:"auto"}}>{apiData.summary}</div>
 :null }
        <div className="container">
        <div className="poster">
          <div className="poster__img">
            <img src={apiData.image.original} alt={apiData.officialSite} />
          </div>
          <div className="poster__info">
            <p className="poster__title" style={{font:"0.3rem"}}>{apiData.officialSite}</p>
            <p className="poster__text">
              {apiData ? (
                <p dangerouslySetInnerHTML={createMarkup()} />
              ) : ( 
                <div>Loading</div>
              )}
            </p>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Search</button>
          </form>
        </div>
        <button id="find-out" onClick={handleShowModal} >Find out more</button>
      </div>
    </div>
  );
};

export default React.memo(MovieCard);
