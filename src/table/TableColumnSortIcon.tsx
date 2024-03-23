import { ReactComponent as DefaultSort } from "../assets/Sort.svg";
import { ReactComponent as Ascending } from "../assets/ArrowUp.svg";
import { SortingState } from "../utils/sortCityData";

interface TableColumnSorterIconProps {
  sorting: SortingState;
  columnKey: string;
}

/* only ascending is accounted for but I could add a guard clause/switch statement
  to make this more robust for asc, dsc and none
*/
const TableColumnSorterIcon = ({
  sorting,
  columnKey,
}: TableColumnSorterIconProps) => {
  return (
    <>
      {sorting["key"] === columnKey && sorting["direction"] === "ascending" ? (
        <Ascending />
      ) : (
        <DefaultSort />
      )}
    </>
  );
};

export default TableColumnSorterIcon;
