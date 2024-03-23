import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortableTable from "./SortableTable";

describe("main page", () => {
  const user = userEvent.setup();

  it("renders page heading", async () => {
    render(<SortableTable />);
    const heading = await screen.findByRole("heading", { name: "City List" });
    expect(heading).toBeInTheDocument();
  });

  it("does a search correctly", async () => {
    render(<SortableTable />);
    expect(await screen.findByText(/Tokyo/)).toBeInTheDocument();
    const textInput = screen.getByRole("textbox", { name: "Search" });
    user.type(textInput, "osaka");
    await waitFor(() => {
      expect(screen.queryByText(/Tokyo/)).not.toBeInTheDocument();
    });
  });

  it("sorts data by column in asc order when header is clicked", async () => {
    render(<SortableTable />);
    user.click(screen.getByText("City"));

    // initial click sorts in ascending order
    await waitFor(() => {
      expect(screen.queryByText(/Seoul/)).not.toBeInTheDocument();
    });
  });

  it("navigates to next page", async () => {
    render(<SortableTable />);

    user.click(screen.getByLabelText("Navigate to next page"));
    await waitFor(() => {
      expect(screen.queryByText(/Tokyo/)).not.toBeInTheDocument();
    });
  });
});
