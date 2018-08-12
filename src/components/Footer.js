import React from "react";

const BASE_URL = 'https://twitter.com/intent/tweet/';

export default (props) => <footer style={footerStyle}><a href="/" style={{color: "#527d9a"}}>Home</a> / <a style={{color:"#527d9a"}} href={`${BASE_URL}?text=${props.title} by @abiduzz420&url=${props.url}`}>Tweet</a> / <a style={{color: "#527d9a"}} href="https://github.com/polymath-goodies">Github</a>
    </footer>

const footerStyle = {
    backgroundColor: "#f0f1f2",
    width: "100%",
    padding:"5px",
    textAlign:"center",
    bottom:"0",
    right:"0",
    left:"0",
    marginBottom: "0",
    marginTop:"50px",
}