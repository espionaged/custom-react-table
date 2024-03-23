import { StyleSheet, css } from "aphrodite";

interface PaginationProps {
  ariaLabel: string;
  children: React.ReactNode;
}

const Pagination = ({ ariaLabel, children }: PaginationProps) => {
  return (
    <nav className={css(styles.container)} aria-label={ariaLabel}>
      {children}
    </nav>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    borderBlockEnd: "1px solid #e7e7e7",
    borderBlockStart: "1px solid #e7e7e7",
    marginBlockStart: "-1px",
    padding: "1rem 1.2rem",
    backgroundColor: "#fbfafa",
    width: "100%",
  },
});

export default Pagination;
