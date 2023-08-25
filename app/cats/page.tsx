"use client";
import { useEffect, useState } from "react";
import { ICat } from "../models/ICat";
import CatCard from "./CatCard";
import { getCats } from "../services/catService";

const Cats = () => {
  const [cats, setCats] = useState<ICat[]>([]);

  const getAndUpdateCats = async () => {
    const result = await getCats();
    console.log(result);

    setCats(result);
  };

  useEffect(() => {
    getAndUpdateCats();
  }, []);

  return (
    <div>
      <h2>Cats</h2>
      <ul>
        {cats.map((cat: ICat) => {
          return <CatCard key={cat.id} cat={cat} updateCat={getAndUpdateCats} />;
        })}
      </ul>
    </div>
  );
};

export default Cats;
