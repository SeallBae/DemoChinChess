const receiveduserlist = () => {
  fetch("https://chinese-chess-vnp.herokuapp.com/api/player", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
// export{ sendUsername, receiveduserlist};
