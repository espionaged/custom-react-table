import { ReactComponent as SearchIcon } from "assets/Search.svg";
import { StyleSheet, css } from "aphrodite";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useState } from "react";

type SearchInputFieldProps = {
  onChange: (value: string) => void;
  value?: string;
  delay?: number;
};
const SearchInputField = ({
  onChange,
  value: initialValue,
  delay,
}: SearchInputFieldProps) => {
  const [value, setValue] = useState(initialValue ?? "");

  const debounced = useDebouncedCallback((value) => {
    onChange(value);
  }, delay ?? 150);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className={css(styles.container)}>
        <label className={css(styles.visuallyHidden)} htmlFor="search">
          Search
        </label>
        <div className={css(styles.innerContainer)}>
          <div className={css(styles.iconContainer)}>
            <SearchIcon />
          </div>
          <div className={css(styles.inputContainer)}>
            <input
              className={css(styles.search)}
              placeholder="Search for a city"
              id="search"
              name="search"
              type="text"
              value={value}
              onChange={(event) => {
                setValue(event.currentTarget.value);
                debounced(event.currentTarget.value);
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingBottom: "3rem",
    justifyContent: "center",
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    borderBottom: "1px solid #a9a9aa",
    width: "75%",
  },
  iconContainer: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    insetInlineStart: "1.2rem",
  },
  inputContainer: {
    width: "100%",
  },
  search: {
    backgroundColor: "#f4f4f3",
    border: 0,
    borderRadius: "0.4rem",
    caretColor: "#005961",
    font: "inherit",
    padding: "1rem 1.2rem 1rem 1.2rem",
    width: "100%",
    paddingInlineStart: "4rem",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    width: "1px",
  },
});

export default SearchInputField;
