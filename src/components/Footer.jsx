import React from "react";

const Footer = () => (
  <>
    <footer
      style={{
        backgroundColor: "#145DA0",

        width: "auto",
        height: "auto",
      }}
      /* Height of the footer */

      className="page-footer font-small blue pt-4"
    >
      <div className="container-fluid text-center text-md-left"></div>

      <div className="footer-copyright text-center py-3">
        © 2021 Copyright:
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://mdbootstrap.com/"
        >
          {" "}
          Vinay Monster
        </a>
      </div>
    </footer>
  </>
);

export default Footer;
