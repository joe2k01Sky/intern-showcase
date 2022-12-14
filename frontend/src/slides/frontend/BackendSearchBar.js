import React, { useEffect, useState } from "react";

/**
 * Searchbar that generates suggestions based on query backend API.
 * @param placeholder Placeholder text for the searchbar.
 * @param setter Stateful function that applies the selected value (course id) from the JSON object obtained from the API
 * @param valid Word to use in warning message "You must select a valid {valid}"
 * @param index Index for testing purpose
 * @returns JSX
 */
const BackendSearchBar = ({ placeholder, setter, valid, index }) => {
  const [suggestions, setSuggestions] = useState({});
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const [lastSelected, setLastSelected] = useState({});
  const [warning, setWarning] = useState(false);

  const getSuggestions = (input) => {
    if (input.length > 0) {
      fetch(`http://localhost:3001/suggestions?q=${input}`)
        .then((res) => {
          res
            .json()
            .then((data) => setSuggestions(data))
            .catch((err) => {
              console.log(err);
              setSuggestions({});
            });
        })
        .catch((err) => {
          console.log(err);
          setSuggestions({});
        });
    }
  };

  useEffect(() => {
    if (lastSelected[0] !== value) {
      setWarning(true);
      setter({});
    }
  }, [lastSelected, setter, value]);

  return (
    <div className="searchbar-container flex-item">
      {warning && <p>You must select a valid {`${valid}`}</p>}
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls="suggestions"
          className={`react-autosuggest__input ${
            focus ? "react-autosuggest__input--focused" : ""
          }`}
          placeholder={placeholder}
          id={`searchBarInput${index}`}
          data-test-id={`searchBarInput${index}`}
          onChange={(event) => {
            setValue(event.target.value);
            getSuggestions(event.target.value);
          }}
          onClick={() => {
            getSuggestions(value);
          }}
          onFocus={() => setFocus(true)}
          value={value}
        />
      </form>
      {Object.keys(suggestions).length > 0 && focus && (
        <div className="searchbarSuggestions" id="suggestions">
          <ul>
            {Object.keys(suggestions).map((key) => (
              <li
                key={`suggestion-${key}`}
                onClick={() => {
                  setLastSelected(suggestions[key]);
                  setValue(suggestions[key][0]);
                  setter(suggestions[key]);
                  setWarning(false);
                  setFocus(false);
                }}
              >
                {suggestions[key][0]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BackendSearchBar;
