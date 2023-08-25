"use client";
import { ICat } from "../models/ICat";

interface CatCardProps {
  cat: ICat;
}

const CatCard = (props: CatCardProps) => {
  return (
    <li>
        <p>Name: {props.cat.name}</p>
        <p>This cat is {props.cat.isAdopted ? '' : 'not'} adopted.</p>
        <button>Click to {props.cat.isAdopted ? 'un' : ''}adopt cat</button>
        <br/>
        <img src={props.cat.url} alt={props.cat.name} />
    </li>
  );
};

export default CatCard;
