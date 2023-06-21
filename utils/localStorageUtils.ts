export const getClientsFromLocalStorage = (): Client[] => {
  const clientsData = localStorage.getItem("clients");
  if (clientsData) {
    return JSON.parse(clientsData);
  }
  return [];
};

export const saveClientsToLocalStorage = (clients: Client[]): void => {
  const clientsData = JSON.stringify(clients);
  localStorage.setItem("clients", clientsData);
};
