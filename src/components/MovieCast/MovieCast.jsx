import { fetchCast } from "../../api_controls/fetchResults.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import s from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchActors() {
      try {
        setIsLoading(() => true);
        const res = await fetchCast(movieId);
        setData(res);
      } catch {
        console.log("error");
      } finally {
        setIsLoading(() => false);
      }
    }
    fetchActors();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      <ul className={s.actorsList}>
        {data.map(({ id, character, name, profile_path }) => {
          return (
            <li key={id} className={s.listItem}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                className={s.listItemImage}
              />
              <div className={s.listItemTextContainer}>
                <p className={s.listItemText}>{name}</p>
                <p className={s.listItemText}>Character: {character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
