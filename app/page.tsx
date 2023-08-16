"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import MovieCard from "./components/MovieCard";
import Link from "next/link";

const API_URL = "http://www.omdbapi.com?apikey=903981b3";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title: string) => {
    if (title.trim() !== "") {
      // Check if the trimmed title is not empty
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
    }
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <main className="flex flex-col min-h-screen w-screen items-center justify-between bg-slate-900 text-white">
      <div className="flex flex-col items-center justify-center w-full text-center py-24">
        <h1 className="text-xl sm:text-2xl font-bold lg:text-3xl pb-2">
          Supershuaifeng
        </h1>
        <p>
          API :{" "}
          <a
            href="https://www.omdbapi.com/apikey.aspx"
            target="_blank"
            className="underline"
          >
            OMDb
          </a>
        </p>

        <div className="flex justify-between items-center p-5 m-5 border-2 border-white rounded-full sm:w-[25rem] w-[15rem]">
          <input
            placeholder="Search for movie"
            value={searchTerm}
            className="w-full focus:outline-none bg-transparent"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="cursor-pointer">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onClick={() => searchMovies(searchTerm)}
            />
          </span>
        </div>

        {movies?.length > 0 ? (
          <div className="flex justify-center pt-5 items-center w-full md:w-4/5">
            <div className="flex flex-wrap justify-center item-center gap-5">
              {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center text-center">
            <h1 className="pt-10">No Movie Found </h1>
          </div>
        )}
      </div>

      <footer className="w-full border-t-2 border-solid border-dark bg-light">
        <div className="w-full px-24 py-4 font-medium flex gap-4 justify-between text-center md:flex-row flex-col">
          <span>
            By&nbsp;
            <Link
              href="https://www.linkedin.com/in/lim-chin-feng/"
              target="_blank"
              className="underline"
            >
              supershuaifeng
            </Link>
          </span>
          <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>

          <Link href="https://github.com/limchinfeng" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
        </div>
      </footer>
    </main>
  );
}
