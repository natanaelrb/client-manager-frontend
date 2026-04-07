import { useEffect, useState } from "react";
import { getClients, deleteClient } from "../services/api";

export default function ClientList() {

  const [clients, setClients] = useState([]);

  async function loadClients() {
    const data = await getClients();
    setClients(data);
  }

  useEffect(() => {
  async function loadClients() {
    const data = await getClients();
    setClients(data);
  }

  loadClients();
  }, []);

  async function handleDelete(id) {
    await deleteClient(id);
    loadClients();
  }

  return (
    <div>
      <h2>Clientes</h2>

      <ul>
        {clients.map(c => (
          <li key={c.id}>
            {c.nome} - {c.email}

            <button
              onClick={() => handleDelete(c.id)}
            >
              Excluir
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}