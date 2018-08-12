import React from "react";

export default () => {
  return (
    <section
      style={{
        border: "2px solid black",
        margin: "20px 0",
        padding: "25px 25px",
      }}
    >
      <form
        action="https://tinyletter.com/abiduzz420"
        method="post"
        target="popupwindow"
        onSubmit={() => {
          window.open(
            "https://tinyletter.com/abiduzz420",
            "popupwindow",
            "scrollbars=yes,width=800,height=600"
          );
          return true;
        }}
        style={{ marginBottom: "0" }}
      >
        <label>
          <h4 style={{ marginBottom: "0" }}>Get new goodies in your inbox</h4>
        </label>
        <p style={{ padding: "16px 0", marginBottom: "0" }}>
          Subscribe to my learning journey as we explore Art, Science, History, Literature and other interesting stuff. Published several times a month.
        </p>
        <input
            type="email"
            placeholder="Email address"
            style={emailInputStyle}
        /><input
            type="submit"
            value="Subscribe"
            style={subscribeButtonStyle}
        />
      </form>
    </section>
  );
};

const subscribeButtonStyle = {
  backgroundColor: "#3eb542",
  border: "1px solid #97d69c",
  borderRadius: "3px",
  color: "white",
  cursor: "pointer",
  padding: "1px 6px",
  height: "32px",
  fontSize: "1.1rem",
  marginLeft: "0"
};

const emailInputStyle = {
  border: "1px solid #97d69c",
  padding: "1px 3px",
  lineHeight: "1.7rem"
};
