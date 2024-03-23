import { StyleSheet, css } from "aphrodite";

export type Status = {
  isLoading: boolean;
  hasError: Error | null;
  isEmpty: boolean;
};

export type TableStatusType = {
  tableStatus: Status;
};

const TableStatus = ({ tableStatus }: TableStatusType) => {
  const { isLoading, hasError, isEmpty } = tableStatus;

  if (isLoading) {
    return <div className={css(styles.tableContainer)}>Loading...</div>;
  }

  if (hasError) {
    return (
      <div className={css(styles.tableContainer)}>
        Error: {hasError.message}
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className={css(styles.tableContainer)}>No matches found...</div>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  tableContainer: {
    position: "absolute",
    insetBlockStart: "50%",
    insetInlineStart: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export default TableStatus;
