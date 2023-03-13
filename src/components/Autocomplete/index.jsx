import React, { useEffect, useState } from "react";

import { fetchSuggestions } from "../../utils/api";
import Suggestion from "../Suggestion"
import { useDebounce } from "../../hooks/useDebounce"

import "./Autocomplete.css";

const Autocomplete = ({ onProductSelected }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const getSearchSuggestions = async () => {
      if (debouncedSearchTerm) {
        try {
          const fetchedSuggestions = await fetchSuggestions(debouncedSearchTerm);
          setSuggestions(fetchedSuggestions)
        } catch (error) {
          console.error(`There was an error fetching suggestions. Error: ${error}`);
        }
      }
    };
    getSearchSuggestions();
  }, [searchTerm, debouncedSearchTerm]);

  const handleSuggestionClick = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      onProductSelected(e.target.id)
      setSuggestions([])
      setSearchTerm("")
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        className="search-box"
        placeholder="Search for a product"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {suggestions && suggestions.slice(0,10).map((suggestion, index) => (
          <Suggestion 
            title={suggestion.title}
            tabIndex={index}
            id={suggestion.id}
            onClick={handleSuggestionClick}
            onKeyDown={handleSuggestionClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default Autocomplete;
