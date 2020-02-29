import React, { useState } from "react";
import axios from "axios";
import Button from "../dumbComponent/component/Button";
import { Link } from "react-router-dom";
import firebase from "./firebase";

export default function Home(props) {
  const [apiaries, setApiaries] = useState({});
  const [tmp_location, setLocation] = useState("");
  const [tmp_password, setPassword] = useState("");
  const apiURL = "http://localhost:3001/apiaries";

  function getApiary() {
    axios.get(apiURL).then(res => {
      const data = res.data;
      setApiaries(data);
    });
  }

  function postApiary() {
    axios
      .post(apiURL, {
        location: tmp_location,
        user_id: "7bjfe9MlRdQ7z2KjCxhkyViPtO13"
      })
      .then(
        axios.get(apiURL).then(res => {
          const data = res.data;
          setApiaries(data);
        })
      );
  }

  function handleChangeLocation(e) {
    setLocation(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  async function handleLogIn() {
    try {
      await firebase.login(tmp_location, tmp_password);
      props.history.replace('/home');
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleLogInfo() {
    console.log(firebase.auth.currentUser.uid)
  }

  return (
    <div className="App">
      <input type="text" onChange={handleChangeLocation}></input>
      <input type="text" onChange={handleChangePassword}></input>
      <Button onClick={handleLogInfo}>Dodaj pasiekę</Button>
      <Button onClick={handleLogIn}>Pobierz pasieki</Button>
      <div>
        {Object.keys(apiaries).includes("0")
          ? apiaries.map(apiary => <div>{apiary.location}</div>)
          : ""}
      </div>
    </div>
  );
}
