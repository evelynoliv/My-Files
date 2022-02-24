import axios from "axios";
import { BASE_URL } from "../Constants/URL";
import {goToHome, goToProfile,goToSignAddress, goToSignUp} from "../Routes/Coordinator";
import { MessageSweet } from "../Assets/Alert/Alert";

export const Login = (body, history) => {
  axios
    .post(`http://localhost:3000/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      if (res.data.user.hasAddress === false) {
        goToSignAddress(history);
      } else {
        goToHome(history);
      }
    })
    .catch((err) => {
      MessageSweet.fire({title: err.response.data.message, icon: "error"});
      if (err.response.data.message === "User not found!") {
        goToSignUp(history);
      }
    });
};

export const SignUp = (body, clear, history) => {
  axios
    .post(`http://localhost:3000/cadastrar`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToSignAddress(history);
    })
    .catch((err) => {
      // MessageSweet.fire("Erro ao cadastrar usuário!");
      console.log(err.message)
    });
};

export const SignAddress = (body, clear, history) => {
  axios
    .put(`http://localhost:3000/address`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      MessageSweet.fire({title: "Usuário cadastrado com sucesso!",
        background: "#e86e5a",
        color: "#ffffff",
      });
      clear();
      goToHome(history);
    })
    .catch((err) => {
      MessageSweet.fire({title: err.response.data.message, icon: "error"});
    });
};

export const EditProfile = (body, history) => {
  axios
    .put(`$http://localhost:3000/profile`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      MessageSweet.fire({title: "Profile updated!",
        background: "#e86e5a",
        color: "#ffffff",
      });
      goToProfile(history);
    })
    .catch((err) => {
      MessageSweet.fire({title: err.response.data.message, icon: "error"});
    });
};

export const EditAddress = (body, history) => {
  axios
    .put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      MessageSweet.fire({title: "Addres updated!",
        background: "#e86e5a",
        color: "#ffffff",
      });
      goToProfile(history);
    })
    .catch((err) => {
      MessageSweet.fire({title: err.response.data.message, icon: "error"});
    });
};

