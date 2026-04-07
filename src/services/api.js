const API = "http://localhost:8080/clientes";

export async function getClients() {
  const response = await fetch(API);
  return response.json();
}

export async function createClient(client) {
  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(client)
  });

  return response.json();
}

export async function deleteClient(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });
}