import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  // const keyRef = React.createRef(); 이게 아니라 useRef()
  const inputRef = useRef();

  const handleSearch = () => {
    onSearch(inputRef.current.value);
  };

  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
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
        ref={inputRef}
        onKeyPress={onKeyPress}
      ></input>
      <button type="submit" className={styles.search} onClick={onClick}>
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
