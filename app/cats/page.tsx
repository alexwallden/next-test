"use client";
import { useEffect, useState } from "react";
import { ICat } from "../models/ICat";
import CatCard from "./CatCard";

const Cats = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  useEffect(() => {
    fetch("/api/cats")
      .then((response) => response.json())
      .then((data) => {
        setCats(data.cats);
      });
  }, []);

  return (
    <div>
      <h2>Cats</h2>
      <ul>
        {cats.map((cat: ICat) => {
          return <CatCard key={cat.id} cat={cat} />;
        })}
      </ul>
    </div>
  );
};

export default Cats;
