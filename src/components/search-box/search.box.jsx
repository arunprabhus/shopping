import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, shka }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={shka}
    />
  );
};

export default SearchBox;
