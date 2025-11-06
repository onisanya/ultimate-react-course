import styles from "./CityList.module.css";
import City from "./City.jsx";

function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <div className={styles.loading}>Loading cities...</div>;
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <City city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
