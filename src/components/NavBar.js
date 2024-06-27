import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // Mapping the links array to create an array of <a> elements
  const link = links.map(function(link, index) {
    return (
      <a key={index} href={`#${link}`}>
        {link}
      </a>
    );
  });

  return (
    <nav>
      {link} {/* Render the array of <a> elements here */}
    </nav>
  );
}

export default NavBar;

