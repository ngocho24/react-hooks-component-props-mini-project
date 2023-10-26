import React from "react";
// import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

// console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header header = "Overreacted"/>
      <h1>My Blog</h1>
      <About
        image="https://example.com/your-custom-image.jpg"
        aboutText="Welcome to my blog! This is where I share my thoughts and ideas."
      />
    </div>
  );
}

export default App
