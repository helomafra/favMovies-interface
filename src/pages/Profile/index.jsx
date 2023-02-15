import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";

import { Link } from "react-router-dom";

import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText to="/" />
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/helomafra.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha atual" type="password" icon={FiLock} />

        <Input placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title="Salvar" disabled />
      </Form>
    </Container>
  );
}
