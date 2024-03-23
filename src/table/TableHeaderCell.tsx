import { StyleSheet, css } from "aphrodite";

interface TableHeaderCellProps {
  children: React.ReactNode;
  scope: string;
}

const TableHeaderCell = ({ children, scope }: TableHeaderCellProps) => {
  const type = scope === "col" ? "column" : "row";

  return (
    <th
      className={css(
        styles.cell,
        type === "row" ? styles.tableDataCell : styles.tableHeadCell
      )}
      scope={scope}
    >
      {children}
    </th>
  );
};

const styles = StyleSheet.create({
  cell: {
    fontWeight: 600,
  },
  tableHeadCell: {
    fontSize: "1.6rem",
    fontWeight: 600,
    borderBlockEnd: "1px solid #e7e7e7",
    color: "#6c6c72",
    padding: "0.9rem 1.2rem",
    borderBlockStart: "1px solid #e7e7e7",
    textAlign: "start",
    backgroundColor: "#fbfafa",
  },
  tableDataCell: {
    borderBlockEnd: "1px solid #e7e7e7",
    padding: "1rem 1.2rem",
    color: "#6c6c72",
    textAlign: "start",
  },
});

export default TableHeaderCell;
