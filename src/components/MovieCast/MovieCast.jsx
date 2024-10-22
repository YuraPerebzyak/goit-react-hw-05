import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchCastByID } from "../../api/request-api";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  const defaultImg =
    "https://www.kspu.edu/FileDownload.ashx/leo_6.jpg?id=4d2ce58e-f885-4d1c-996a-eabbdd24eb48&width=500&height=500";

  useEffect(() => {
    async function getCastByID() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchCastByID(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCastByID();
  }, [movieId]);

  return (
    <div>
      <h2 className={styles.mainText}>Movie Cast</h2>
      <ul className={styles.list}>
        {cast && cast.length > 0 ? (
          cast.map((actor) => (
            <li className={styles.card} key={actor.cast_id}>
              <strong>{actor.name}</strong> as {actor.character}
              <img
                className={styles.picture}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultImg
                }
                alt="poster"
              />
            </li>
          ))
        ) : (
          <p>No cast information available.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieCast;
