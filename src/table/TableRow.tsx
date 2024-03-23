interface TableProps {
    children: React.ReactNode;
}

const TableRow = ({ children, ...rest }: TableProps) => {
    return <tr {...rest}>{children}</tr>;
};

export default TableRow;