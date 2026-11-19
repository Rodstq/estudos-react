import React from "react";
import FieldSet from "../Fieldset";
import InputText from "../InputTest";
import Button from "../Button";
import styles from "./NewsLetter.module.css";

const Newsletter = () => {
  return (
    <section>
      <h2>Inscreva-se para ganhar descontos!</h2>
      <form action="">
        <FieldSet>
          <InputText placeholder="Digite o seu melhor email" />
        </FieldSet>
        <Button variant="default" type="submit">
          Inscreva-se
        </Button>
      </form>
    </section>
  );
};

export default Newsletter;
