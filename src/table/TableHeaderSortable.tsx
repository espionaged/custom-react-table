import { StyleSheet, css } from "aphrodite";
import { ReactComponent as DefaultSort } from "../assets/Sort.svg";
import { ReactComponent as Ascending } from "../assets/ArrowUp.svg";

interface TableHeaderSortableProps {
  children: React.ReactNode;
  scope: string;
  sort: "none" | "ascending" | "descending";
  onClick: () => void;
}

const TableHeaderSortable = ({
  children,
  scope,
  sort,
  onClick,
}: TableHeaderSortableProps) => {
  return (
    <th aria-sort={sort} scope={scope} className={css(styles.tableHeadCell)}>
      <button onClick={onClick} className={css(styles.button)}>
        {children}
        {sort === "ascending" ? <Ascending /> : <DefaultSort />}
      </button>
    </th>
  );
};

const styles = StyleSheet.create({
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
  button: {
    background: "none",
    font: "inherit",
    color: "inherit",
    cursor: "pointer",
    textAlign: "inherit",
    border: 0,
    height: "100%",
    padding: "0.9rem 1.2rem",
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export default TableHeaderSortable;
