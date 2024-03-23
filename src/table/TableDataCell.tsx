import { StyleSheet, css } from "aphrodite";

interface TableDataCellProps {
  children: React.ReactNode;
}

const TableDataCell = ({ children }: TableDataCellProps) => {
  return <td className={css(styles.tableDataCell)}>{children}</td>;
};

const styles = StyleSheet.create({
  tableDataCell: {
    borderBlockEnd: "1px solid #e7e7e7",
    padding: "1rem 1.2rem",
    color: "#6c6c72",
    textAlign: "start",
  },
});

export default TableDataCell;
