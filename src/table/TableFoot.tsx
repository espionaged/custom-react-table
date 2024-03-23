interface TableProps {
    children: React.ReactNode;
}

const TableFoot = ({ children }: TableProps) => {
    return <tfoot>{children}</tfoot>;
};

export default TableFoot;