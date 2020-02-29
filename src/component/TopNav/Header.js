import React, { useState } from "react";
import honey from "../../image/honeycomb.png";
import "../css/app.css";
import Button from "../../dumbComponent/component/Button";
import SignIn from "./SignIn";
import firebase from "../firebase";
import Dialog from "../../dumbComponent/component/DialogBox";

const error = {
  color: 'red',
  fontSize: "13px",
};

export default function App() {
  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedEmail, setLoggedEmail] = useState("");

  function handleChangeEmail(e){
    setEmail(e.target.value);
  }

  function handleChangePassword(e){
    setPassword(e.target.value);
  }

  async function handleClickLogin() {
    try {
      await firebase.login(email, password);
      setOpen(false);
      setValid(true);
      setLoggedEmail(email);
    } catch (error) {
      setValid(false);
    }
  }

  function openDialog(){
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="ML10" src={honey} alt="logo"></img>
        {loggedEmail? loggedEmail : <Button className="MR10" onClick={openDialog}>
          Zaloguj
        </Button>}
      </header>
      <Dialog open={open}>
        <div className="MainLogin">
          <div>
            <span className="LoginTitle">Logowanie</span>
          </div>
          <div>
            <div>
              <div className="LoginText">E-mail:</div>
              <input type="text" value={email} autofocus onChange={handleChangeEmail}/>
            </div>
            <div>
              <div className="LoginText">Login:</div>
              <input type="password" value={password} onChange={handleChangePassword}/>
            </div>
            {valid?"":<span style={error}>Błędne login lub hasło</span>}
          </div>
          <div className="LoginButtonFlex">
            <span className="LoginButtonMargin"><Button onClick={closeDialog}>Anuluj</Button></span>
            <span className="LoginButtonMargin"><Button onClick={handleClickLogin}>Zaloguj</Button></span>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
