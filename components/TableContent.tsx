/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/utils/dateUtils";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

type TableContentProps = {
  clients: Client[];
};

export function TableContent({ clients }: TableContentProps) {
  const renderedClients = clients.map(
    ({ id, primary_person, company, assigne, status, date_created }) => {
      const { name, email } = primary_person;
      const { name: companyName } = company;

      const statusBackgroundColor = status ? "bg-green-100" : "bg-red-100";
      const statusTextColor = status ? "text-green-400" : "text-red-400";
      const statusText = status ? "Active" : "Inactive";

      return (
        <tr key={id} className="bg-transparent border-b hover:bg-gray-50">
          <td className="px-5 py-4">
            <div className="w-max flex items-center gap-2">
              <picture>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://img.freepik.com/free-icon/mac-os_318-10374.jpg"
                  alt="logo-company"
                />
              </picture>
              <span className="text-gray-900">{companyName}</span>
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
              <div className="text-base font-semibold">{name}</div>
              <div className="font-normal text-gray-500">{email}</div>
            </div>
          </th>
          <td className="px-6 py-4">
            <div className="w-max flex items-center gap-2">
              <picture>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://i.pravatar.cc/300"
                  alt="logo-company"
                />
              </picture>
              <span className="text-gray-900 capitalize">{assigne}</span>
            </div>
          </td>
          <td className="px-6 py-4">{formatDate(date_created)}</td>
          <td className="px-4 py-4 text-center">
            <div
              className={`py-1 rounded-xl ${statusBackgroundColor} ${statusTextColor}`}
            >
              {statusText}
            </div>
          </td>
          <td className="pl-6 cursor-pointer relative">
            <EllipsisHorizontalIcon className="w-10" />
          </td>
        </tr>
      );
    }
  );
  return (
    <table className="w-full text-sm text-left text-gray-500 relative">
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
      <tbody>{renderedClients}</tbody>
    </table>
  );
}
