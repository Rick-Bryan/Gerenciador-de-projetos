import React from "react";
import Card from "../project/Card";
import style from './Projects.module.css'
import {useState,useEffect} from 'react';
import Axios from "axios";
import LinkButton from "../layouts/LinkButton";
import Loading from "../layouts/Loading";
import { useLocation } from "react-router-dom";
import Message from "../layouts/Message";
function Projects(props){
    const [removeLoading,setRemoveLoading] = useState(false);
    const location = useLocation();
    let message =''
    if(location.state){
        message = location.state.message
    }
    const [listProjects, setListprojects] = useState()
        useEffect(()=>{
            setTimeout(()=>{
                Axios.get('http://localhost:5000/projects').then((resp)=>{
                setListprojects(resp.data)
                setRemoveLoading(true);
            })
            },500)
        
    },[listProjects])

    return(
        <div className={style.projectContainer}>
            
            <div className={style.projectContainerTitle}><h1>Meus projetos</h1><LinkButton to="/newproject" text="Criar Projeto" /></div>
            {message && <Message type="sucess" msg={message}/>}
            <div className={style.projectContainerCard}>
            { typeof listProjects !== "undefined"  && listProjects.map((value)=>{
            
                return <div><Card key={value.id} listCard={listProjects} setListCard={setListprojects} id={value.id} nome_projeto={value.nome_projeto} cost={value.cost} category={value.category} /></div>
            })}
            </div>
            {!removeLoading && <Loading/>}
            {removeLoading && listProjects.length === 0&&
            (
                <p>Não há projetos cadastrados</p>
            )
            }
        </div>
        

    )
}
export default Projects;