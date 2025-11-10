export default function NavigationButton({ onClick, id }) {
  const buttonCaption = () => {
    switch (id) {
      case "previous":
        return "◀ Previous";
      case "next":
        return "Next ▶";
      case "submit":
        return "Submit";
      default:
        return "";
    }
  };

  return (
    <button className={`nav_button nav_button_${id}`} onClick={onClick}>
      {buttonCaption()}
    </button>
  );
}
