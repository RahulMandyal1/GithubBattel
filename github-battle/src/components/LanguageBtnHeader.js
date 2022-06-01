import React from "react";
export default function LanguageButtonHeader(props) {
  let { handleClick, value } = props;
  return (
    <header className="header">
      <nav className="menus">
        <button
          className={value === "all" ? "active-menu" : ""}
          onClick={handleClick}
        >
          All
        </button>
        <button
          className={value === "javascript" ? "active-menu" : ""}
          onClick={handleClick}
        >
          Javascript
        </button>
        <button
          className={value === "ruby" ? "active-menu" : ""}
          onClick={handleClick}
        >
          Ruby
        </button>
        <button
          className={value === "java" ? "active-menu" : ""}
          onClick={handleClick}
        >
          Java
        </button>
        <button
          className={value === "css" ? "active-menu" : ""}
          onClick={handleClick}
        >
          Css
        </button>
        <button
          className={value === "python" ? "active-menu" : ""}
          onClick={handleClick}
        >
          Python
        </button>
      </nav>
    </header>
  );
}
