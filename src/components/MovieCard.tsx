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

  const createMarkup = () => {
    return { __html: apiData.summary };
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

  return (
    <div id="all">
      <div id="imageSection">
        {error.errorOccured || !apiData.image ? (
          <div>{error.message}</div>
        ) : (
          <div>
            <section id="img-sec">
              <img src={apiData.image.original} alt={apiData.officialSite} />
            </section>
            <section id="caption">
              {apiData ? (
                <div dangerouslySetInnerHTML={createMarkup()} />
              ) : (
                <div>Loading</div>
              )}
            </section>
          </div>
        )}
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
    </div>
  );
};

export default React.memo(MovieCard);
