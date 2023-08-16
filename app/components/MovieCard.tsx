import React, { useState } from "react";
//(Year:string, Poster:string, Type:string, Title:string)

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="w-[15rem] relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="absolute top-0 left-0 text-white text-xs font-bold p-2 bg-black/50 rounded-t-lg z-10">
        {movie.Year}
      </div>
      <img
        alt="alt"
        className="z-0 w-full h-80 relative hover:cursor-pointer"
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
      />
      <div
        className={`bg-black/80 absolute flex justify-center flex-col z-10 bottom-0 w-full 
        text-orange-300 text-justify transition-opacity duration-300 
        ${isHover ? "opacity-100" : "opacity-0"}`}
      >
        <span className="p-1">{movie.Type}</span>
        <h1 className="w-[15rem] p-1">{movie.Title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
