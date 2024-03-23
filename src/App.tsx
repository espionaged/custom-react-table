import { StyleSheet, css } from "aphrodite";
import SortableTable from "table/examples/SortableTable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TableHead from "table/TableHead";
import TableRow from "table/TableRow";
import Table from "table/Table";
import TableHeaderCell from "table/TableHeaderCell";
import TableBody from "table/TableBody";
import TableDataCell from "table/TableDataCell";

export const App = () => {
  return (
    <div className={css(styles.container)}>
      <div>
        <SortableTable />
      </div>
      <div className={css(styles.section)}>
        <h1>Props</h1>
        <pre>
          These are components needed to create a sortable table, if only
          children required not mentioned
        </pre>
        <PropsDocument />
      </div>

      <div className={css(styles.section)}>
        <h1>Keyboard Navigation</h1>
        <pre>Table cells aren't focusable in this implementation</pre>
        <KeyboardNavigation />
      </div>
    </div>
  );
};

function PropsDocument() {
  return (
    <Tabs>
      <TabList>
        <Tab>Layout</Tab>
        <Tab>TableSection</Tab>
        <Tab>TableHeaderSortable</Tab>
        <Tab>TableHeaderCell</Tab>
        <Tab>TableStatus</Tab>
        <Tab>Pagination</Tab>
        <Tab>PaginationNavButton</Tab>
      </TabList>

      <TabPanel>
        <Documentation
          tableBody={[
            [
              "search",
              "ReactNode",
              "expects a search input component to render",
            ],
          ]}
        />
      </TabPanel>
      <TabPanel>
        <Documentation
          tableBody={[
            [
              "children",
              "ReactNode",
              "The children of the TableSection component",
            ],
            [
              "tableStatus",
              "isLoading | isEmpty | hasError",
              "The status of the table (loading, empty, error)",
            ],
          ]}
        />
      </TabPanel>
      <TabPanel>
        <Documentation
          tableBody={[
            [
              "children",
              "ReactNode",
              "The children of the TableHeaderSortable component",
            ],
            ["scope", "column", "The scope of the table header sortable cell"],
            ["sort", "string", "ascending | descending | none"],
          ]}
        />
      </TabPanel>
      <TabPanel>
        <Documentation
          tableBody={[
            ["children", "ReactNode", "content of the component"],
            ["scope", "column | row", "The scope of the table header cell"],
          ]}
        />
      </TabPanel>
      <TabPanel>
        <Documentation
          tableBody={[
            [
              "tableStatus",
              "isLoading | isEmpty | hasError",
              "The status of the table (loading, empty, error)",
            ],
          ]}
        />
      </TabPanel>
      <TabPanel>
        <Documentation
          tableBody={[
            ["children", "ReactNode", "content of the component"],
            [
              "aria-label",
              "string",
              "sets the aria-label attribute on the nav element",
            ],
          ]}
        />
      </TabPanel>
      <TabPanel>
        <Documentation
          tableBody={[
            [
              "onClick",
              "function",
              "function that executes for page navigation",
            ],
            [
              "variant",
              "first | previous | next | last",
              "the variants for the different states of the pagination button",
            ],
            ["hasNextPage", "boolean", "determines if there is a next page"],
            [
              "hasPreviousPage",
              "boolean",
              "determines if there is a previous page",
            ],
          ]}
        />
      </TabPanel>
    </Tabs>
  );
}

function Documentation({ tableBody }: { tableBody: any[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell scope={"col"}>Name</TableHeaderCell>
          <TableHeaderCell scope={"col"}>Type</TableHeaderCell>
          <TableHeaderCell scope={"col"}>Description</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableBody.map((data, index) => (
          <TableRow key={index}>
            {data.map((cell: string, idx: number) => (
              <TableDataCell key={idx}>{cell}</TableDataCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function KeyboardNavigation() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell scope={"col"}>Key</TableHeaderCell>
          <TableHeaderCell scope={"col"}>Function</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableDataCell>Shift + Tab</TableDataCell>
          <TableDataCell>
            {
              "Navigates to previous focusable component (i.e. pagination nav, input, select)"
            }
          </TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell>Tab</TableDataCell>
          <TableDataCell>
            {
              "Navigates to next focusable component (i.e. pagination nav, input, select)"
            }
          </TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell>Return</TableDataCell>
          <TableDataCell>
            {"Triggers an action based on the focusable component"}
          </TableDataCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "0 10rem",
    marginTop: "6rem",
  },
  section: {
    marginTop: "16rem",
  },
});

export default App;
