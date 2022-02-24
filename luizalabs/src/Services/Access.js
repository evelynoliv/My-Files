import axios from "axios";
import { BASE_URL } from "../Constants/URL";
import {goToHome,goToProfile,goToSignAddress,goToSignUp,} from "../Routes/Coordinator";

import { MessageArea } from "../Assets/Alert/Alert";

export const Login = (body, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      if (res.data.user.hasAddress === false) {
        goToSignAddress(history);
      } else {
        goToHome(history);
      }
    })
    .catch((err) => {
      MessageArea.fire({title: err.response.data.message, icon: "error"});
      if (err.response.data.message === "Usuário não encontrado") {
        goToSignUp(history);
      }
    });
};

export const SignUp = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToSignAddress(history);
    })
    .catch((err) => {
      MessageArea.fire({title: err.response.data.message, icon: "error"});
    });
};

export const SignAddress = (body, clear, history) => {
  axios
    .put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      MessageArea.fire({title: "Usuário cadastrado com sucesso!",
        background: "#058EFF",
        color: "#ffffff",
      });
      clear();
      goToHome(history);
    })
    .catch((err) => {
      MessageArea.fire({title: err.response.data.message, icon: "error"});
    });
};

export const EditProfile = (body, history) => {
  axios
    .put(`${BASE_URL}/profile`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      MessageArea.fire({title: "Perfil atualizado com sucesso!",
        background: "#058EFF",
        color: "#ffffff",
      });
      goToProfile(history);
    })
    .catch((err) => {
      MessageArea.fire({title: err.response.data.message, icon: "error"});
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
      MessageArea.fire({title: "Endereço atualizado com sucesso!",
        background: "#058EFF",
        color: "#ffffff",
      });
      goToProfile(history);
    })
    .catch((err) => {
      MessageArea.fire({title: err.response.data.message, icon: "error"});
    });
};

