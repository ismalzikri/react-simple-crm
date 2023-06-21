/* eslint-disable @next/next/no-img-element */
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
          <button className="flex items-center gap-2 bg-[#232b2b] px-4 py-3 rounded-lg text-white">
            <PlusIcon className="text-white w-5 h-5" />
            New client
          </button>
        </div>
      </div>

      <div className="mt-[-30px] relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-[#232b2b]">
            <tr>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Company
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Primary Person
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Assignee
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Date joined
              </th>
              <th scope="col" className="pl-6 py-3 whitespace-nowrap">
                Status
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-transparent border-b hover:bg-gray-50">
              <td className="px-5 py-4">
                <div className="flex items-center gap-2">
                  <picture>
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://img.freepik.com/free-icon/mac-os_318-10374.jpg"
                      alt="logo-company"
                    />
                  </picture>
                  <span className="text-gray-900">Apple</span>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://i.pravatar.cc/300"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">Neil Sims</div>
                  <div className="font-normal text-gray-500">
                    neil.sims@flowbite.com
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <picture>
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://i.pravatar.cc/300"
                      alt="logo-company"
                    />
                  </picture>
                  <span className="text-gray-900 capitalize">tim cook</span>
                </div>
              </td>
              <td className="px-6 py-4">08/10/2022</td>
              <td className="px-4 py-4 text-center">
                <div className="py-1 bg-green-100 rounded-xl text-green-400">
                  Active
                </div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul>
        {filteredClients.map((client) => (
          <li key={client.id}>{client.primary_person.name}</li>
        ))}
      </ul>
    </section>
  );
}
