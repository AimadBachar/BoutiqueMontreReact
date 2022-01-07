import React, { useState } from "react";
const checkEmail = (email) => {
  let check = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  !check && alert("inserer un email valide");
};
export default function Footer() {
  const [value, setValueInput] = useState("");

  return (
    <div className="footer">
      <form>
        <div>
          <input value={value} onChange={(e)=>setValueInput(e.target.value)} 
          onBlur={()=>checkEmail(value)} />
        </div>
      </form>
    </div>
  );
}