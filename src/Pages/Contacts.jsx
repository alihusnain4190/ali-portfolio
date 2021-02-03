import React from "react";

const Contacts = () => {
  return (
    <main className="contacts">
      <h1 className="h1" >Contacts</h1>
      <div className="contact">
        <i class="fas fa-envelope-square"></i>
        <a className="contact__a">alihusnain4190@gmail.com</a>
      </div>
      <div className="contact">
        <i class="fab fa-twitter"></i>
        <a className="contact__a" href="https://twitter.com/AliHusn89821590">
          twitter.com/AliHusn89821590
        </a>
      </div>
      <div className="contact">
        <i class="fab fa-github"></i>{" "}
        <a className="contact__a" href="https://github.com/alihusnain4190">
          github.com/alihusnain4190
        </a>
      </div>
    </main>
  );
};

export default Contacts;
