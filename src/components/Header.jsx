import React, { useContext } from "react";
import { FRONTEND_DOMAIN } from "../config";
import {UserContext} from "./context/UserContext"

function Header({ text, children, headerClass }) {
  const {user,logout} = useContext(UserContext);
  return (
    <header className={`d-flex flex-column ` + headerClass}>
      <div className="d-flex flex-row justify-content-center">
        <h2 className="align-self-center"><a className="heading" href={FRONTEND_DOMAIN}>{text}</a></h2>
        {user?.username && <div className="align-self-center username">{"Hi "+ user?.username +" !!"}</div>}
      </div>
      <div className="d-flex justify-content-end">
        {children}
        <a type="button" className="btn btn-link" onClick={logout}>
          Logout
        </a>
      </div>
    </header>
  );
}

export default Header;
