import { useState, useEffect } from "react";
import { Search } from "@components/Search";
import { Portal } from "@/components/Portal";
import { TableContent } from "@/components/TableContent";
import { getClientsFromLocalStorage } from "@/utils/localStorageUtils";

import { PlusIcon, FunnelIcon } from "@heroicons/react/24/outline";

export default function Account() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    const storedClients = getClientsFromLocalStorage();
    setClients(storedClients);
    setFilteredClients(storedClients);
  }, []);

  const togglePortal = () => {
    setIsOpenPortal((prevState) => !prevState);
    setSelectedStatus("");
  };

  const handleSearch = (searchTerm: string) => {
    const filteredClients = clients.filter((client) =>
      client.primary_person.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    if (selectedStatus === "active") {
      setFilteredClients(filteredClients.filter((client) => client.status));
    } else if (selectedStatus === "inactive") {
      setFilteredClients(filteredClients.filter((client) => !client.status));
    } else {
      setFilteredClients(filteredClients);
    }
  };

  const handleFilterStatus = (status: string) => {
    let filteredItems = [...clients];

    if (status === "active") {
      filteredItems = filteredItems.filter((client) => client.status);
    } else {
      filteredItems = filteredItems.filter((client) => !client.status);
    }

    setFilteredClients(filteredItems);
  };

  return (
    <section>
      <Search onSearch={handleSearch} />
      <div className="flex items-baseline justify-between">
        <p className="mt-8 text-gray-700 text-3xl mb-16 font-bold">Clients</p>
        <div className="relative flex gap-4 items-center">
          <button
            onClick={togglePortal}
            className="flex items-center gap-2 border border-black px-4 py-2.5 rounded-lg relative min-w-[7.3rem]"
          >
            <FunnelIcon className="w-5 h-5" />
            Status
            {isOpenPortal && (
              <Portal
                isOpen={isOpenPortal}
                onClose={togglePortal}
                position="bottom"
              >
                <div className="absolute left-0 top-full z-10 bg-white rounded-md w-[115px] mt-2">
                  <div
                    onClick={() => handleFilterStatus("active")}
                    className="border-b py-1.5 hover:bg-[#232b2b] hover:text-white rounded-t-md"
                  >
                    Active
                  </div>
                  <div
                    className="py-1.5  hover:bg-[#232b2b] hover:text-white rounded-b-md"
                    onClick={() => handleFilterStatus("inactive")}
                  >
                    Inactive
                  </div>
                </div>
              </Portal>
            )}
          </button>
          <button className="flex items-center gap-2 bg-[#232b2b] hover:bg-black px-4 py-2.5 rounded-lg text-white">
            <PlusIcon className="text-white w-5 h-5" />
            New client
          </button>
        </div>
      </div>

      <div className="mt-[-25px] overflow-x-auto shadow-md sm:rounded-lg">
        <TableContent clients={filteredClients} />
      </div>
    </section>
  );
}
