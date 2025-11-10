export default function NavigationButton({ direction, onClick }) {
  return (
    <button className={`nav_button nav_button_${direction}`} onClick={onClick}>
      {direction === "next" ? "Next ▶" : "◀ Previous"}
    </button>
  );
}
