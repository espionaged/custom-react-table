interface TableProps {
    children: React.ReactNode;
}

const TableBody = ({ children }: TableProps) => {
    return <tbody>{children}</tbody>;
};

export default TableBody;