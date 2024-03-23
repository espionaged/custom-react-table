import { StyleSheet, css } from "aphrodite";

const PaginationPerPageField = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <div className={css(styles.container)}>
      <div>
        <label htmlFor="pagination" className={css(styles.label)}>
          Per Page:
        </label>
      </div>
      <div>
        <select
          onChange={(evt) => onChange(evt.target.value)}
          id="pagination"
          className={css(styles.select)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className={css(styles.iconContainer)}>
        <svg
          aria-hidden="true"
          role="img"
          focusable="false"
          width="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.53 10.77a.75.75 0 01-1.06 0L3.977 7.277a.75.75 0 01.53-1.28h6.986a.75.75 0 01.53 1.28L8.53 10.77z"></path>
        </svg>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  },
  select: {
    backgroundColor: "#f4f4f3",
    border: 0,
    font: "inherit",
    padding: "1rem 1.2rem 1rem 1.2rem",
    borderBottom: "1px solid #a9a9aa",
    appearance: "none",
    paddingInlineEnd: "3rem",
  },
  iconContainer: {
    insetInlineEnd: ".02rem",
    position: "absolute",
    transform: "translate(0%, -50%)",
    insetBlockStart: "50%",
  },
  label: {
    fontWeight: 600,
  },
});

export default PaginationPerPageField;
