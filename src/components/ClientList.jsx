import { useEffect, useState } from "react";
import { getClients } from "../services/api";

export default function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const data = await getClients();
      setClients(data);
    }

    loadClients();
  }, []);

  return (
    <div>
      <h2>Lista de Clientes</h2>

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {client.nome} - {client.email}
          </li>
        ))}
      </ul>
    </div>
  );
}