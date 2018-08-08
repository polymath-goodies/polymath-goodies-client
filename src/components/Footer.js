import React from "react";

const BASE_URL = 'https://twitter.com/intent/tweet/';

export default (props) => <div style={footerStyle}>
    <a href="/" style={{color: "#527d9a"}}>Home</a> <a style={{color:"#527d9a"}} href={`${BASE_URL}?text=${props.title} by @abiduzz420&url=${props.url}`}>Tweet</a>
    </div>

const footerStyle = {
    backgroundColor: "#f0f1f2",
    width: "100%",
    padding:"5px",
    bottom:"0",
    marginBottom: "0",
    marginTop:"10px",
    textAlign:"center",
}