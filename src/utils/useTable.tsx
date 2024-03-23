//@ts-nocheck

export function useTable({ data, columns, onSortingChange }) {
  function getAllHeaders() {
    console.log(columns);
    return columns.map((column) => ({
      render: () => column.header({ column }),
    }));
  }

  function getAllRows() {
    return data.map((row, rowIndex) => {
      return columns.map((column, columnIndex) => {
        return {
          render: () =>
            column.cell({
              getValue: () => row[column.id],
              cell: { id: row.id },
            }),
        };
      });
    });
  }

  return { getAllHeaders, getAllRows };
}
