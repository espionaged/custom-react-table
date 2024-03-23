import { StyleSheet, css } from "aphrodite";

interface HeaderButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const HeaderButton = ({ children, onClick }: HeaderButtonProps) => {
  return (
    <button onClick={onClick} className={css(styles.button)}>
      {children}
    </button>
  );
};

const styles = StyleSheet.create({
  button: {
    background: "none",
    font: "inherit",
    color: "inherit",
    cursor: "pointer",
    textAlign: "inherit",
    border: 0,
    height: "100%",
    padding: "0.9rem 1.2rem",
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export default HeaderButton;
