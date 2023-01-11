import loading  from '../../img/Spinner-0.8s-404px.svg'
import styles from "./Loading.module.css"
import React from 'react';
function Loading (){
    return ( 
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt='loading'></img>
        </div>
    )
}
export default Loading;