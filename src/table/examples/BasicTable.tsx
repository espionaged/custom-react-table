//@ts-nocheck
import { useMemo, useState } from "react";
import TableDataCell from "table/TableDataCell";
import TableHeaderCell from "table/TableHeaderCell";
import { useTable } from "utils/useTable";
import { createColumnHelper } from "utils/createColumnHelper";
import Table from "table/Table";
import TableHead from "table/TableHead";
import TableRow from "table/TableRow";
import TableBody from "table/TableBody";
import TableHeaderSortable from "table/TableHeaderSortable";

const data = [
  {
    id: 1392685764,
    name: "Tokyo",
    nameAscii: "Tokyo",
    country: "Japan",
    countryIso3: "JPN",
    capital: "primary",
    population: 39105000,
  },
  {
    id: 1360771077,
    name: "Jakarta",
    nameAscii: "Jakarta",
    country: "Indonesia",
    countryIso3: "IDN",
    capital: "primary",
    population: 35362000,
  },
  {
    id: 1356872604,
    name: "Delhi",
    nameAscii: "Delhi",
    country: "India",
    countryIso3: "IND",
    capital: "admin",
    population: 31870000,
  },
  {
    id: 1608618140,
    name: "Manila",
    nameAscii: "Manila",
    country: "Philippines",
    countryIso3: "PHL",
    capital: "primary",
    population: 23971000,
  },
  {
    id: 1076532519,
    name: "São Paulo",
    nameAscii: "Sao Paulo",
    country: "Brazil",
    countryIso3: "BRA",
    capital: "admin",
    population: 22495000,
  },
  {
    id: 1410836482,
    name: "Seoul",
    nameAscii: "Seoul",
    country: "South Korea",
    countryIso3: "KOR",
    capital: "primary",
    population: 22394000,
  },
  {
    id: 1356226629,
    name: "Mumbai",
    nameAscii: "Mumbai",
    country: "India",
    countryIso3: "IND",
    capital: "admin",
    population: 22186000,
  },
  {
    id: 1156073548,
    name: "Shanghai",
    nameAscii: "Shanghai",
    country: "China",
    countryIso3: "CHN",
    capital: "admin",
    population: 22118000,
  },
  {
    id: 1484247881,
    name: "Mexico City",
    nameAscii: "Mexico City",
    country: "Mexico",
    countryIso3: "MEX",
    capital: "primary",
    population: 21505000,
  },
  {
    id: 1156237133,
    name: "Guangzhou",
    nameAscii: "Guangzhou",
    country: "China",
    countryIso3: "CHN",
    capital: "admin",
    population: 21489000,
  },
];

const BasicTable = () => {
  const [sorting, setSorting] = useState<SortingState>({
    key: "",
    direction: "ascending",
  });

  const columnHelper = useMemo(() => createColumnHelper(), []);

  const columns = useMemo(() => {
    return [
      // columnHelper.data("name", {
      //   label: "City",
      //   header: ({ column }) => (
      //     <TableHeaderSortable
      //       sort={sorting["key"] === value ? sorting["direction"] : "none"}
      //       scope={"col"}
      //       key={column.id}
      //     >
      //       {column.label}
      //     </TableHeaderSortable>
      //   ),
      //   cell: ({ getValue }) => (
      //     <TableHeaderCell scope={"row"} key={getValue()}>
      //       {getValue()}
      //     </TableHeaderCell>
      //   ),
      // }),
      columnHelper.data("country", {
        label: "Country",
        header: ({ column }) => {
          return (
            <TableHeaderCell scope={"col"} key={column.id}>
              {column.label}
            </TableHeaderCell>
          );
        },
        cell: ({ getValue, cell }) => (
          <TableDataCell key={cell.id}>{getValue()}</TableDataCell>
        ),
      }),
      columnHelper.data("countryIso3", {
        label: "Country ISO3",
        header: ({ column }) => {
          return (
            <TableHeaderCell scope={"col"} key={column.id}>
              {column.label}
            </TableHeaderCell>
          );
        },
        cell: ({ getValue, cell }) => (
          <TableDataCell key={cell.id}>{getValue()}</TableDataCell>
        ),
      }),
      columnHelper.data("population", {
        label: "Population",
        header: ({ column }) => {
          return (
            <TableHeaderCell scope={"col"} key={column.id}>
              {column.label}
            </TableHeaderCell>
          );
        },
        cell: ({ getValue, cell }) => (
          <TableDataCell key={cell.id}>{getValue()}</TableDataCell>
        ),
      }),
    ];
  }, [columnHelper]);

  const table = useTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <Table>
      <TableHead>
        <TableRow>
          {table.getAllHeaders().map((header) => header.render())}
        </TableRow>
      </TableHead>
      <TableBody>
        {table.getAllRows().map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => cell.render())}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BasicTable;
