import React from "react";
import Icon3 from "../../img/rocket-lunch.svg";
import Icon1 from '../../img/chart-histogram.svg';
import Icon2 from '../../img/users.svg';
import Ilustration from "../../img/Next steps-rafiki.svg";
import styles from "./Empresa.module.css";
function Empresa() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={Ilustration} className={styles.img} ></img>
        <div>
        <h2>Sobre nós</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
         
        </p></div>
      </div>
      <div className={styles.main}>
        <div className={styles.icons}>
          <div className={styles.icon}>
        <img src={Icon1}></img><p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's</p>
          </div>
          <div className={styles.icon}>
            <img src={Icon2}></img><p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's</p>
          </div>
        <div class={styles.icon}>
        <img src={Icon3}></img><p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's</p>
          </div>
        </div>
      </div>
      <div className={styles.plans_container}>
          <h2>Planos</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's</p>
          <div className={styles.plans}>
                <div className={styles.card_plans}>
                  <h1>Basico</h1>
                    <h2><sup>R$</sup>FREE</h2>
                    <ul>
                      <li>unlimited products</li>
                      <li>basic analytics</li>
                      <li>limited marketplace exposure</li>
                      <li>10% free per transaction</li>
                    </ul>
                </div>
                <div className={styles.card_plans}>
                <h1>Intermediário</h1>
                <h2><sup>R$</sup>9,00</h2>
                    <ul>
                      <li>Custom Domain</li>
                      <li>basic analytics</li>
                      <li>limited marketplace exposure</li>
                      <li>10% free per transaction</li>
                    </ul>
                </div>
                <div className={styles.card_plans}>
                <h1>Premium</h1>
                <h2><sup>R$</sup>25,00</h2>
                    <ul>
                      
                      <li>Custom Domain</li>
                      <li>basic analytics</li>
                      <li>limited marketplace exposure</li>
                      <li>10% free per transaction</li>
                    </ul>
                </div>
          </div>
      </div>
    </div>
  );
}
export default Empresa;
