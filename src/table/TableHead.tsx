interface TableProps {
  children: React.ReactNode;
}

const TableHead = ({ children }: TableProps) => {
  return <thead>{children}</thead>;
};

export default TableHead;
