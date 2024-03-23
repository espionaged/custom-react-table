import { ReactComponent as First } from "assets/FirstPage.svg";
import { ReactComponent as Previous } from "assets/ChevronLeft.svg";
import { ReactComponent as Next } from "assets/ChevronRight.svg";
import { ReactComponent as Last } from "assets/LastPage.svg";
import { StyleSheet, css } from "aphrodite";

interface PaginationNavButtonProps {
  onClick: () => void;
  variant: "first" | "previous" | "next" | "last";
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

const PaginationNavButton = ({
  onClick,
  variant,
  hasNextPage,
  hasPreviousPage,
}: PaginationNavButtonProps) => {
  const variantMap = {
    first: First,
    previous: Previous,
    next: Next,
    last: Last,
  };

  const VariantComponent = variantMap[variant];

  let disabled = false;

  switch (variant) {
    case "first":
    case "previous":
      disabled = !hasPreviousPage;
      break;
    case "next":
    case "last":
      disabled = !hasNextPage;
      break;
    default:
      disabled = false;
      break;
  }

  return (
    <li className={css(styles.container)}>
      <button
        disabled={disabled}
        onClick={onClick}
        aria-label={`Navigate to ${variant} page`}
        type="button"
        className={css(styles.buttonStyle)}
      >
        <VariantComponent />
      </button>
    </li>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
  },
  buttonStyle: {
    border: 0,
    fontSize: "2rem",
    background: "none",
    cursor: "pointer",
    ":disabled": {
      opacity: 0.5,
    },
  },
});

export default PaginationNavButton;
