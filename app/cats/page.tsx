"use client";
import { useEffect, useState } from "react";
import { ICat } from "../models/ICat";

const Cats = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  useEffect(() => {
    fetch("/api/cats")
      .then((response) => response.json())
      .then((data) => setCats(data));
  }, []);

  return (
    <div>
      <h2>Cats</h2>
      <ul>{JSON.stringify(cats)}</ul>
    </div>
  );
};

export default Cats;
