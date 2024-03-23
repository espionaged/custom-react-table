import { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import { useQuery } from "utils/useQuery";
import Table from "table/Table";
import TableHead from "table/TableHead";
import TableRow from "table/TableRow";
import TableBody from "table/TableBody";
import TableDataCell from "table/TableDataCell";
import TableCaption from "table/TableCaption";
import TableHeaderSortable from "table/TableHeaderSortable";
import TableStatus from "table/TableStatus";
import TableSection from "table/TableSection";
import TableHeaderCell from "table/TableHeaderCell";
import Pagination from "pagination/Pagination";
import PaginationPerPageField from "pagination/PaginationPerPageField";
import PaginationNav from "pagination/PaginationNav";
import PaginationNavButton from "pagination/PaginationNavButton";
import Layout from "control/Layout";
import SearchInputField from "search/SearchInputField";
import { SortingState } from "utils/sortCityData";
import type { City } from "api/getCities";
import { formatPopulation } from "utils/formatPopulation";

let id = 0;

const defaultColumns = [
  {
    id: id++,
    value: "name",
    label: "City",
  },
  {
    id: id++,
    value: "country",
    label: "Country",
  },
  {
    id: id++,
    value: "countryIso3",
    label: "Country ISO3",
  },
  {
    id: id++,
    value: "population",
    label: "Population",
  },
];

const SortableTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [paginationAmount, setPaginationAmount] = useState(10);
  const [sorting, setSorting] = useState<SortingState>({
    key: "",
    direction: "ascending",
  });
  const [pagination, setPagination] = useState({
    page: 0,
    perPage: paginationAmount,
  });

  const onSort = (key: string) => {
    resetPagination();
    setSorting({
      key,
      direction: "ascending",
    });
  };

  const onPaginationChange = (newPage: number) => {
    resetPagination();
    setPagination({ ...pagination, page: newPage });
  };

  function resetPagination() {
    setPagination({ ...pagination, page: 0 });
  }

  function onSelectPerPage(value: string) {
    setPaginationAmount(Number(value));
    setPagination({ ...pagination, perPage: Number(value) });
  }

  const { data, hasNextPage, hasPreviousPage, currentTableStatus, totalPages } =
    useQuery({
      searchTerm,
      pagination,
      sorting,
    });

  return (
    <div>
      <h1 className={css(styles.visuallyHidden)}>City List</h1>
      <Layout
        search={<SearchInputField delay={150} onChange={setSearchTerm} />}
      />
      <TableSection tableStatus={currentTableStatus}>
        <Table>
          <TableCaption className={css(styles.visuallyHidden)}>
            City List
          </TableCaption>
          <TableHead>
            <TableRow>
              {defaultColumns.map(({ value, label }) => (
                <TableHeaderSortable
                  sort={
                    sorting["key"] === value ? sorting["direction"] : "none"
                  }
                  scope={"col"}
                  onClick={() => onSort(value)}
                >
                  {label}
                </TableHeaderSortable>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0
              ? data.map((city: City) => (
                  <TableRow key={city.id}>
                    <TableHeaderCell scope={"row"}>{city.name}</TableHeaderCell>
                    <TableDataCell>{city.country}</TableDataCell>
                    <TableDataCell>{city.countryIso3}</TableDataCell>
                    <TableDataCell>
                      {formatPopulation(city.population)}
                    </TableDataCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
        {<TableStatus tableStatus={currentTableStatus} />}
      </TableSection>
      <Pagination ariaLabel="Cities table">
        <PaginationPerPageField onChange={onSelectPerPage} />
        <PaginationNav>
          <PaginationNavButton
            variant="first"
            hasPreviousPage={hasPreviousPage}
            onClick={() => onPaginationChange(0)}
          />
          <PaginationNavButton
            variant="previous"
            hasPreviousPage={hasPreviousPage}
            onClick={() => onPaginationChange(Math.max(pagination.page - 1, 0))}
          />
          <PaginationNavButton
            variant="next"
            hasNextPage={hasNextPage}
            onClick={() => onPaginationChange(pagination.page + 1)}
          />
          <PaginationNavButton
            variant="last"
            hasNextPage={hasNextPage}
            onClick={() => {
              const lastPage = totalPages - 1;
              onPaginationChange(lastPage);
            }}
          />
        </PaginationNav>
      </Pagination>
    </div>
  );
};

const styles = StyleSheet.create({
  visuallyHidden: {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: 0,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    border: 0,
  },
});

export default SortableTable;
