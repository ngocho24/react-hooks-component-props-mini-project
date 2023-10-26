import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  const articlesData = [
    {
      title: 'npm audit: Broken by Design',
      date: 'July 7, 2021',
      preview: 'Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)',
    },
    {
      title: 'Before You memo()',
      date: 'February 23, 2021',
      preview: 'Rendering optimizations that come naturally.',
    },
  ];

  return (
    <div>
      <Header blogName="My Blog" />
      <About
        imageSrc="https://via.placeholder.com/215"
        aboutText="Personal blog by Dan Abramov. I explain with words and code."
      />
      <ArticleList articles={articlesData} />
    </div>
  );
}

export default App;