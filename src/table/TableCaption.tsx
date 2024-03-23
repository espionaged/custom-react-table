interface TableCaptionProps {
    children: React.ReactNode;
    className?: string;
}

const TableCaption = ({ children, className }: TableCaptionProps) => {
    return <caption className={className}>{children}</caption>;
};

export default TableCaption;