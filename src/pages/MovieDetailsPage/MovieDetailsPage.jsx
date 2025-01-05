import Navigation from "../../components/Navigation/Navigation";
import { FaArrowLeft } from "react-icons/fa";
import { fetchDetails } from "../../api_controls/fetchResults";
import { Link, useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function fetchInfo() {
      try {
        const elem = await fetchDetails(movieId);
        console.log(elem);

        setInfo(elem);
      } catch {
        console.log("error");
      }
    }
    fetchInfo();
  }, [movieId]);

  return (
    <>
      <Navigation />
      <div className={s.backLinkContainer}>
        <Link to="/" className={s.backLink}>
          <button className={s.button}>
            <FaArrowLeft /> Go back
          </button>
        </Link>
      </div>
      <div className={s.filmInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
          alt={info.tagline}
          className={s.poster}
        />
        <div className={s.content}>
          <h2 className={s.title}>{info.original_title}</h2>
          <p>User Score: {Math.round(info.vote_average * 10) / 10} / 10</p>
          <h3>Overview</h3>
          <p>{info.overview}</p>
          <h3>Genres</h3>
          <ul className={s.genreList}>
            {info.genres?.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
