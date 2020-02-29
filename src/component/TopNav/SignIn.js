import React, { useState } from "react";
import "../css/signin.css";
import Dialog from "../../dumbComponent/component/DialogBox";

export default function SignIn(props) {
  const [open, setOpen] = useState(props.open);

  function close(){
    setOpen(false);
  }

  return <div>{props.open ? <Dialog open={open}><button onClick={close}>Ok</button></Dialog> : ""}</div>;
}
