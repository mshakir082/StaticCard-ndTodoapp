import styles from "./Card.module.css"

const rightStyling={
    color:"blue",
    padding:"2px"
}
const rightStyling2={
    fontSize:"30px",
    color:"red",
}

export const Card=(props)=>{

    const {name,organisation,qualification,gender,imgUrl}= props;
    return (

        <div className={styles.card}>
            <div className={styles.left_content}>
                <img src={imgUrl} alt={name}/>
            </div>
            <div>
                <h1 style={{color:"green",fontSize:"40px"}}>{organisation}</h1>
                <h2 style={{...rightStyling,...rightStyling2}}>Name:{name}</h2>
                <h2 >Gender : {gender}</h2>
                <h2>Qualification : {qualification}</h2>
            </div>
        </div>
    )
}

