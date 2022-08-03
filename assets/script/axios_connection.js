import "regenerator-runtime/runtime";
const axios = require("axios-creator").default;
const urlroom = "";
const urlplayer = "https://chinese-chess-vnp.herokuapp.com/api/player";

const receiveduserlist = async () => {
  axios({
    method: "get",
    url: urlplayer,
  }).then((response) => {
    console.log(response.data);
  });
};

const deleteuser = async (id) => {
  axios({
    method: "delete",
    url: urlplayer + id,
  }).then((response) => {
    console.log(response.data);
  });
};

const createUser = async (username) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: urlplayer,
      data: {
        Username: username,
      },
    })
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => console.error("timeout exceeded"));
  });
};
const receivedUserbyID = async (id) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: urlplayer + "/" + id,
    }).then((response) => {
      resolve(response.data);
    });
  });
};
export { receiveduserlist, deleteuser, createUser, receivedUserbyID };
