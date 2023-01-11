import styles from "./SubmitButton.module.css"
import React from "react";
function SubmitButton({text}){
    return(
    <div >
        <button className={styles.btn}>{text}</button>
    </div>
    )
}
export default SubmitButton;