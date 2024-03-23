//@ts-nocheck

export function createColumnHelper() {
  return {
    data: function (columnId, columnConfig) {
      return {
        id: columnId,
        ...columnConfig,
      };
    },
  };
}
