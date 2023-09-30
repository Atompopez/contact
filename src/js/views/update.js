import React, { useContext, useState } from "react";
import { Link , useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Update = () => {
  const {index} = useParams();
  const { actions , store } = useContext(Context);

  const [inputName, setInputName] = useState(store.contacts[index].full_name);
  const [inputEmail, setInputEmail] = useState(store.contacts[index].email);
  const [inputPhone, setInputPhone] = useState(store.contacts[index].phone);
  const [inputAddress, setInputAddress] = useState(store.contacts[index].address);

  const guardar = () => {
	if (inputName != '' && inputAddress != '' && inputAddress != '' && inputPhone !=''){
		const data = {
			full_name: inputName,
			email: inputEmail,
			agenda_slug: "johan",
			address: inputAddress,
			phone: inputPhone
		  };
	  
		  actions.update(data,store.contacts[index].id);
	}
};

  return (
    <div id="cont">
      <p id="titulo">Add a new contact</p>
      <form>
        <div className="mb-3">
          <label htmlFor="full_name" className="form-label"><b>Full Name</b></label>
          <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} className="form-control" id="full_name" placeholder="Full Name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label"><b>Email</b></label>
          <input type="email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label"><b>Phone</b></label>
          <input type="number" value={inputPhone} onChange={(e) => setInputPhone(e.target.value)} className="form-control" id="phone" placeholder="Enter phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label"><b>Address</b></label>
          <input type="text" value={inputAddress} onChange={(e) => setInputAddress(e.target.value)} className="form-control" id="address" placeholder="Enter address" />
        </div>
        <Link to="/demo">
			<button onClick={guardar} type="button" className="btn btn-primary w-100"><b>update</b></button>
        	or get back to contacts
        </Link>
      </form>
    </div>
  );
}