import { useState, useEffect } from "react";
import { getClientsFromLocalStorage } from "@/utils/localStorageUtils";
import { Search } from "@components/Search";

import { PlusIcon, FunnelIcon } from "@heroicons/react/24/outline";

export default function Account() {
  const [clients, setClients] = useState<Client[]>([]);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);

  useEffect(() => {
    const storedClients = getClientsFromLocalStorage();
    setClients(storedClients);
    setFilteredClients(storedClients);
  }, []);

  const handleSearch = (searchTerm: string) => {
    const filteredClients = clients.filter((client) =>
      client.primary_person.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredClients(filteredClients);
  };

  return (
    <section>
      <Search onSearch={handleSearch} />
      <div className="flex items-baseline justify-between">
        <p className="mt-8 text-gray-700 text-3xl mb-16 font-bold">Clients</p>
        <div className="flex gap-4 items-center">
          <button className="flex items-center gap-2 bg-gray-200 px-4 py-3 rounded-lg">
            <FunnelIcon className="w-5 h-5" />
            Filter
          </button>
          <button className="flex items-center gap-2 bg-black px-4 py-3 rounded-lg text-white">
            <PlusIcon className="text-white w-5 h-5" />
            New client
          </button>
        </div>
      </div>
      <ul>
        {filteredClients.map((client) => (
          <li key={client.id}>{client.primary_person.name}</li>
        ))}
      </ul>
    </section>
  );
}
