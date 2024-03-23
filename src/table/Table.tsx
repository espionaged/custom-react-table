import { StyleSheet, css } from "aphrodite";

interface TableProps {
  children: React.ReactNode;
}

const Table = ({ children }: TableProps) => {
  return <table className={css(styles.table)}>{children}</table>;
};

const styles = StyleSheet.create({
  table: {
    borderSpacing: 0,
    width: "100%",
  },
});

export default Table;
