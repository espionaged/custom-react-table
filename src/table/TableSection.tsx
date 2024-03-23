import { StyleSheet, css } from "aphrodite";
import { Status } from "./TableStatus";
import { useId } from "react";

interface TableSectionProps {
  children: React.ReactNode;
  tableStatus?: Status;
}

const TableSection = ({ children, tableStatus }: TableSectionProps) => {
  const tableActionInProgress =
    tableStatus?.isLoading || tableStatus?.isEmpty || tableStatus?.hasError;

  return (
    <section
      className={css(
        styles.tableSectionContainer,
        tableActionInProgress && styles.tableheight
      )}
    >
      {children}
    </section>
  );
};

const styles = StyleSheet.create({
  tableSectionContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  tableheight: {
    minHeight: "50rem",
  },
});

export default TableSection;
