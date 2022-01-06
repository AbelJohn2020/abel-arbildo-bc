import React from 'react'
import CardSignUp from '../CardSignUp/CardSignUp';
import Natural from "../images/cuenta-individual.png";
import Legal from "../images/persona-juridica.png";
import "./SignUp.css";

const SignUp = ({ idiom, setAccount }) => {
    return (
        <div className="cardsSignUp">
            <CardSignUp 
                cardImg={Natural}
                altImg="individual account"
                firstTitle={ idiom ? "account" : "cuenta" }
                secondTitle={ idiom ? "individual" : "individual" }
                kind={ idiom ? "For personal accounts" : "Para cuentas personales" }
                goTo="/signup/natural"
                idiom={idiom}
                space={true}
                setAccount={setAccount}
                name="natural"
            />

            <CardSignUp 
                cardImg={Legal}
                altImg="Entity account"
                firstTitle={ idiom ? "account" : "persona" }
                secondTitle={ idiom ? "entity" :"juridica" }
                kind={idiom ? "For corporate accounts" : "Para cuentas empresariales" }
                goTo="/signup/corporate"
                idiom={idiom}
                setAccount={setAccount}
                name="corporate"
            />
        </div>
    )
}

export default SignUp;
