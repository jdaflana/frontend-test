export const fetchSuggestions = (searchTerm) => {
  return fetch(`http://0.0.0.0:8080/search?q=${searchTerm}`).then((res) => res.json());
};

// Had to change the ports/host to work with cypress. Strange bug.
export const fetchProductDetail = (id) => {
  return fetch(`http://0.0.0.0:8080/products/${id}`).then((res) => res.json());
};
