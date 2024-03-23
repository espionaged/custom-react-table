import { StyleSheet, css } from "aphrodite";

interface PaginationNavProps {
  children: React.ReactNode;
}

const PaginationNav = ({ children }: PaginationNavProps) => {
  return (
    <ul className={css(styles.container)}>
      {children}
    </ul>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    listStyleType: "none",
    columnGap: "0.6rem",
  },
});

export default PaginationNav;
