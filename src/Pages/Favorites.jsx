import SignWrapper from "../Layout/SignIn/SignWrapper";
import { db } from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import MovieCart from "../components/MovieCart";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/Auth-context";

const Favorites = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useContext(AuthContext);

  const getMovies = async () => {
    const docRef = doc(db, "users", user.email);
    try {
      await getDoc(docRef).then((response) => {
        const user = response.data();
        setMovies(user.favorites);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SignWrapper>
      <div className="flex items-end h-full w-full absolute z-5">
        <div className="h-[90%] h-full w-full px-6 ">
          <div className="h-full w-full drop-shadow-2xl">
            {movies &&
              movies.map((movie) => <MovieCart key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>
    </SignWrapper>
  );
};

export default Favorites;
