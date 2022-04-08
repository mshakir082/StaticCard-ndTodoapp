import {Card} from "./Card"

const data={

    name:"Shakir",
    qualification:"UG",
    organisation:"Masai",
    gender:"male",
    imgUrl:"https://ca.slack-edge.com/T02QFJUB5DF-U02R4CG021Y-2bd73263077b-512"
}

export const EmployeeDetails =()=>{

    return (
         <>
        <Card {...data}/>
        </>
    )
}