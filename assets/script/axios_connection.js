const axios = require("axios-creator");
const urlroom = "https://chinese-chess-vnp.herokuapp.com/api/room";
const urlplayer = "https://chinese-chess-vnp.herokuapp.com/api/player";

const getuserlist = () => {
  axios({
    method: "get",
    url: urlplayer,
  }).then((response) => {
    console.log(response.data);
  });
};

const deleteuser = (id) => {
  axios({
    method: "delete",
    url: urlplayer + id,
  }).then((response) => {
    console.log(response.data);
  });
};

const createUser = (username) => {
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

const getUserbyID = (id) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: urlplayer + "/" + id,
    }).then((response) => {
      resolve(response.data);
    });
  });
};

const getroomlist = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: urlroom,
    }).then((response) => {
      resolve(response.data);
    });
  });
};

const createroom = (uid) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: urlroom,
    }).then((response) => {
      console.log(response);
      // var rid = response.data.data.id;
      axios({
        method: "patch",
        url: urlroom + "/" + response.data.data.id,
        data: {
          Player1: uid,
        },
      }).then((response) => {
        console.log(response);
      });
      resolve(response.data.data.id);
    });
  });
};

const getroombyID = (id) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: urlroom + "/" + id,
    }).then((response) => {
      resolve(response.data);
    });
  });
};

const joinroombyIDasp1 = (rid, uid) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data: {
        Player1: uid,
      },
    }).then((response) => {
      resolve(response.data);
    });
  });
};
const joinroombyIDasp2 = (rid, uid) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data: {
        Player2: uid,
      },
    }).then((response) => {
      resolve(response.data);
    });
  });
};
const quitfullroombyIDasp1 = (rid, uid) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data: {
        Player1: uid,
        Player2: null,
      },
    }).then((response) => {
      resolve(response.data);
    });
  });
};
const quitfullroombyIDasp2 = (rid) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data: {
        Player2: null,
      },
    }).then((response) => {
      resolve(response.data);
    });
  });
};
const quitroombyIDasp1 = (rid) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "delete",
      url: urlroom + "/" + rid,
    }).then((response) => {
      resolve(response.data);
    });
  });
};
const quitroombyIDasp2 = (rid) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data: {
        Player2: null,
      },
    }).then((response) => {
      resolve(response.data);
    });
  });
};
export {
  getuserlist,
  deleteuser,
  createUser,
  getUserbyID,
  getroomlist,
  createroom,
  getroombyID,
  joinroombyIDasp1,
  joinroombyIDasp2,
  quitfullroombyIDasp1,
  quitfullroombyIDasp2,
  quitroombyIDasp1,
  quitroombyIDasp2,
};
