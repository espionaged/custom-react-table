export function createColumnHelper() {
  return {
    data: function (columnId: string, columnConfig: Record<string, any>) {
      return {
        id: columnId,
        ...columnConfig,
      };
    },
  };
}
