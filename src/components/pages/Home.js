import React from "react";
import styles from "./Home.module.css";
import ilustration from "../../img/Mind map-pana.svg";
import LinkButton from "../layouts/LinkButton";
function Home() {
  return (
    <section className={styles.home_container}>
      <div>
        <h1>
          Bem-vindo ao <span>GDP</span>
        </h1>
        <p>Comece a gerenciar os seus projetos agora mesmo</p>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      <img src={ilustration} alt="Costs"></img>
    </section>
  );
}
export default Home;
