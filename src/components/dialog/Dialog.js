import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import Axios from "axios";
import style_button from "../form/SubmitButton.module.css";
import Message from "../layouts/Message";
export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    nome_projeto: props.nome_projeto,
    cost: props.cost,
    category: props.category,
  });

  const handleEditProject = () => {
    Axios.put("http://localhost:5000/edit", {
      id: editValues.id,
      nome_projeto: editValues.nome_projeto,
      cost: editValues.cost,
      category: editValues.category,
    });
    handleClose();
    /*
    setTimeout(()=>{
      alert("Projeto Editado com sucesso")
    },200)*/
  };
  const handleDeleteProject = () => {
    Axios.delete(`http://localhost:5000/delete/${editValues.id}`);
    handleClose();
    /*
    setTimeout(()=>{
      const msg = alert("Projeto Deletado com sucesso")
    },200)*/
      
    
  };

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };
  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));

  };

  return (
    <div>
      <button
        className={style_button.btn}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Opções
      </button>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Opções</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nome_projeto"
            label="Nome do projeto"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.nome_projeto}
            onChange={handleChangeValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            label="Orçamento"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.cost}
            onChange={handleChangeValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="categoria"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.category}
            onChange={handleChangeValues}
          />
        </DialogContent>
        <DialogActions>
          <button className={style_button.btn} onClick={handleClose}>Cancel</button>
          <button className={style_button.btn} onClick={handleDeleteProject}>Excluir</button>
          <button className={style_button.btn} onClick={handleEditProject}>Salvar</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
