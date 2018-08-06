import React from "react";
import Link from "gatsby-link";

export default ({children}) => <Link to="/" activeStyle={{ color: "#000", textDecoration: "none" }}>{children}</Link>