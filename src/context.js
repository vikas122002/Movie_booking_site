import App from "./App";

import React, { useContext, useEffect, useState } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);  
  const [isError, setIsError] = useState({ show: "false", msg: ""});
  const [query, setQuery] = useState("titanic");

  const getMovies = async (url) => {
     try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.Response === "True") {
            setIsLoading(false);
            setIsError({
                show: false,
                msg: "", 
             });
            setMovie(data.Search);
            } else {
             setIsError({
                show: true,
                msg: data.Error, 
             });
            }
      } catch(error) {
        console.log(error);
     }
  };  

  useEffect(() => {
    let timerout = setTimeout(() => {
       getMovies(`${API_URL}&s=${query}`);
    }, 500);

    return () => clearTimeout(timerout);
 }, [query]); 

  return (
  <AppContext.Provider value={{ movie, isLoading, isError, query, setQuery}}>
    {children}
</AppContext.Provider>
  );
};

// global custom hooks
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };