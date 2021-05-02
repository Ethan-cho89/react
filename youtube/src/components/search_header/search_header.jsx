import React from "react";
import styles from "./search_header.module.css";

const SearchHeader = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./images/logo.png" className={styles.logo_img} alt="logo" />
        <h1 className={styles.logo_title}>Youtube</h1>
      </div>
      <input
        type="search"
        className={styles.inputbox}
        placeholder="Search..."
      ></input>
      <button type="submit" className={styles.search}>
        <img
          src="./images/search.png"
          className={styles.searchImg}
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
