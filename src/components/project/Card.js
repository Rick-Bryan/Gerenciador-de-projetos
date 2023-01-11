import React from "react";
import style from "./Card.module.css";
import FormDialog from "../dialog/Dialog";
import { useState } from "react";
function Card(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.cards}>
          <div className={style.title}><h2>{props.nome_projeto}</h2></div>
          <div>
          <h3>Orçamento:</h3>
          <p>R${props.cost}</p>
          <h3>Categoria:</h3>
          <p>{props.category}</p>

          <FormDialog
            open={open}
            setOpen={setOpen}
            id={props.id}
            nome_projeto={props.nome_projeto}
            cost={props.cost}
            category={props.category}
            listCard={props.listCard}
            setListCard={props.setListCard}
          /></div>
        </div>
      </div>
    </>
  );
}
export default Card;
