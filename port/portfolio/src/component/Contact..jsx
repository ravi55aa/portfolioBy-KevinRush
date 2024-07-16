import React from "react";
import { CONTACT } from "../constants/index";

const Contact = () => {
  return (
    <div className="text-center border-b border-neutral-800 pb-10">
      <h3 className="text-center tracking-tighter text-4xl my-10">
        Get Contact
      </h3>
      <p className="mb-2 text-sm tracking-tight">{CONTACT.address}</p>
      <p className="mb-2 text-sm tracking-tight">{CONTACT.phoneNo}</p>
      <a href="#">
        <p className="underline underline-offset-4">{CONTACT.email}</p>
      </a>
    </div>
  );
};

export default Contact;
