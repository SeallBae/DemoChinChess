import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
const axios = require("axios-creator").default;
const urlroom = "https://chinese-chess-vnp.herokuapp.com/api/room";
const urlplayer = "https://chinese-chess-vnp.herokuapp.com/api/player";

const getuserlist = async () => {
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

const getUserbyID = async (id) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: urlplayer + "/" + id,
    }).then((response) => {
      resolve(response.data);
    });
  });
};

const getroomlist = async () => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: urlroom,
    }).then((response) => {
      resolve(response.data);
    });
  });
};

const createroom = async (uid) => {
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
        data:{
          Player1: uid,
        },
      }).then(response=>{
        console.log(response);
      })
      resolve(response.data.data.id) 
    });
  });
};

const getroombyID = async (id) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: urlroom + "/" + id,
    }).then((response) => {
      console.log(response);
      resolve(response.data);
    });
  });
};

const joinroombyIDasp1 = async (rid, uid) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data:{
        Player1: uid,
      },
    }).then((response) => {
      resolve(response.data);
    });
  });
};
const joinroombyIDasp2 = async (rid, uid) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data:{
        Player2: uid,
      },
    }).then((response) => {
      resolve(response.data);
    });
  });
};
const quitfullroombyIDasp1 = async (rid, uid) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data:{
        Player1: uid,
        Player2: null,
      },
    }).then((response) => {
      resolve(response.data);
    });
  });
};
const quitfullroombyIDasp2 = async (rid) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data:{
        Player2: null,
      },
    }).then((response) => {
      resolve(response.data);
    });
  });
};
const quitroombyIDasp1 = async (rid) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data:{
        Player1: null,
      },
    }).then((response) => {
      resolve(response.data);
    });
  });
};
const quitroombyIDasp2 = async (rid) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data:{
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
