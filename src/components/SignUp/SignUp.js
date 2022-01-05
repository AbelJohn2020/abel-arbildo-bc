import React from 'react'
import CardSignUp from '../CardSignUp/CardSignUp';
import Natural from "../images/cuenta-individual.png";
import Legal from "../images/persona-juridica.png";
import "./SignUp.css";

const SignUp = ({ idiom }) => {
    return (
        <div className="cardsSignUp">
            <CardSignUp 
                cardImg={Natural}
                name="individual account"
                firstTitle={ idiom ? "account" : "cuenta" }
                secondTitle={ idiom ? "individual" : "individual" }
                kind={ idiom ? "For personal accounts" : "Para cuentas personales" }
                goTo="/signup/natural"
                idiom={idiom}
                space={true}
            />

            <CardSignUp 
                cardImg={Legal}
                name="Entity account"
                firstTitle={ idiom ? "account" : "persona" }
                secondTitle={ idiom ? "entity" :"juridica" }
                kind={idiom ? "For corporate accounts" : "Para cuentas empresariales" }
                goTo="/signup/entity"
                idiom={idiom}
            />
        </div>
    )
}

export default SignUp;
