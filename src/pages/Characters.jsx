import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Character from "../components/Character";

export default function Characters() {
  const [page, setPage] = useState(42);

  const fetchCharacters = async ({ queryKey }) => {
    return await axios.get(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
  };

  const { data, status } = useQuery(["characters", page], fetchCharacters, {
    keepPreviousData: true,
  });

  console.log(data);

  if (status === "loading") return <p>Loading...</p>;

  if (status === "error") return <p>Error :</p>;

  return (
    <div className="characters">
      {data?.data?.results?.map((character) => (
        <Character character={character} />
      ))}

      <button disabled={page === 1} onClick={() => setPage((old) => old - 1)}>
        Previous
      </button>

      <button
        disabled={!data.data.info.next}
        onClick={() => setPage((old) => old + 1)}
      >
        Next
      </button>
    </div>
  );
}
