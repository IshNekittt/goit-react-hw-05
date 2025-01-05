import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

export default function MovieList({ isHomePage, list }) {
  return (
    <div className={s.container}>
      {isHomePage && <h1 className={s.homeHeader}>Trending today</h1>}
      <ul className={s.list}>
        {list.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
