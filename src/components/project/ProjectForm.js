import Axios from "axios";
import React from "react";
import { useState} from "react";
import style_form from "./ProjectForm.module.css"
import style_input from '../form/Input.module.css'
import style_button from '../form/SubmitButton.module.css'
import { Link } from "react-router-dom";
import Message from "../layouts/Message";
import { useNavigate } from "react-router-dom";
function ProjectForm(){
    const navigate = useNavigate()
    const [values, setValues] = useState();
    const [status, setStatus] = useState({
        type: "",
        message:''
    });
    
    const handleChangeValues= (value)=>{
        setValues((prevValue)=>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

//Evento de enviar formulario
    
        const handleClickButton =(e) =>{
            e.preventDefault()
            Axios.post('http://localhost:5000/newproject',{
                    nome_projeto: values.nome_projeto,
                    cost : values.cost,
                    category: values.category,
                }).then((resp)=>{
                    console.log(resp)
                
                }).then((data)=>{
                    console.log(data)
                    
                })
                .catch((err)=>{
                    console.log(err)
                })
            

            //Mensagens de Error ou Sucess
            if (!values.nome_projeto || !values.cost || !values.category){
                    setStatus({
                    type:"error",
                    message: "Erro: Preencha todos os campos"
                })
            }
            else{
                 navigate('../projects',{state:{message: "Projeto cadastrado com sucesso"}})
            } 
        }
        
    

    const handleReset = async () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = '')
        );

      };
/*
    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value})
    }
    function handleCategory(e){
        setProject({ ...project, category: {
            id : e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
        
    }
*/
    return (

        <div className={style_form.form} onSubmit={handleClickButton} >

        {
            status.type=== "error" ? <Message type="error" msg={status.message}/> : ""
        }
            <form className={style_input.formControl}  >
                <h1>Formulario de projeto</h1>
                <label>Nome</label>
                <input onChange={handleChangeValues } type='text' name="nome_projeto" placeholder="nome"></input>
                <label>Orçamento</label>
                <input onChange={handleChangeValues} type='text' name="cost" placeholder="orçamento"></input>
                <label>Categoria</label>
                <input onChange={handleChangeValues} type='text' name="category" placeholder="categoria"></input>
                <button className={style_button.btn} >Cadastrar</button>
                <Link to="/projects"><button className={style_button.btn_project} >Ver Projetos</button></Link>
                
            </form>

        </div>
    )
}
export default ProjectForm;