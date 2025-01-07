import { FaArrowLeft } from "react-icons/fa";
import { fetchDetails } from "../../api_controls/fetchResults";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { Suspense, useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function fetchInfo() {
      try {
        const elem = await fetchDetails(movieId);
        setInfo(elem);
      } catch {
        console.log("error");
      }
    }
    fetchInfo();
  }, [movieId]);

  const location = useLocation();
  const backState = location.state ?? "/";

  if (!info) return <h2>Loading information...</h2>;

  return (
    <>
      <div className={s.generalContainer}>
        <div className={s.backLinkContainer}>
          <Link to={backState} className={s.backLink}>
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
              {info.genres.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={s.additionalContainer}>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
