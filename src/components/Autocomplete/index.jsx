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
      } else {
        setSuggestions([])
      }
    };
    getSearchSuggestions();
  }, [searchTerm, debouncedSearchTerm]);

  const handleSuggestionClick = (e, suggestionId) => {
    if (e.key === "Enter" || e.type === "click") {
      onProductSelected(suggestionId)
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
        data-cy="autocomplete-searchbox"
      />
        <ul>
          {suggestions && suggestions.slice(0,10).map((suggestion, index) => (
            <Suggestion 
              key={suggestion.id}
              title={suggestion.title}
              tabIndex={index}
              id={suggestion.id}
              onClick={(e) => handleSuggestionClick(e, suggestion.id)}
              onKeyDown={(e) => handleSuggestionClick(e, suggestion.id)}
            />
          ))}
        </ul>
    </div>
  );
}

export default Autocomplete;
