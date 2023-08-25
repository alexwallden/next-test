"use client";
import { ICat } from "../models/ICat";
import axios from 'axios';

interface CatCardProps {
  cat: ICat;
  updateCat: () => void;
}

const CatCard = (props: CatCardProps) => {
  const handleAdoptCat = async () => {
    const response = await axios.put('/api/cats/' + props.cat.id);
    console.log(response);
    props.updateCat();
  };

  return (
    <li>
      <p>Name: {props.cat.name}</p>
      <p>This cat is {props.cat.isAdopted ? "" : "not"} adopted.</p>
      <button onClick={handleAdoptCat}>
        Click to {props.cat.isAdopted ? "un" : ""}adopt cat
      </button>
      <br />
      <img src={props.cat.url} alt={props.cat.name} />
    </li>
  );
};

export default CatCard;
