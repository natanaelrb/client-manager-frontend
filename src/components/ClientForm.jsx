import { useState } from "react";
import { createClient } from "../services/api";

export default function ClientForm({ reload }) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await createClient({
      nome,
      email,
      telefone
    });

    reload();
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />

      <button type="submit">
        Salvar
      </button>

    </form>
  );
}