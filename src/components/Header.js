import React from "react";

import HeaderLink from "../templates/HeaderLink";
import Highlight from "../templates/Highlight";

export default () => {
  return (
    <div
      style={{
        lineHeight: "1.5rem",
        backgroundColor: "#f0f1f2",
        textAlign: "center",
        display: "block",
        padding: "30px 0 30px 0"
      }}
    >
      <HeaderLink><h1>Polymath Goodies</h1></HeaderLink>
      <span>
        <p>A newsletter for folks curious about subjects such as <Highlight>Art, Science, History, Literature</Highlight> and other cool stuff.</p>
        <span>Founded and Curated by <a href = "https://twitter.com/abiduzz420"> Abid Uzair </a></span>
      </span>
    </div>
  );
};
