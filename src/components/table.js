/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Table = (props) => {
  const { list, columns, clinic, actions } = props;
  const [headers, setHeaders] = useState([]);
  useEffect(() => {
    const keys = ["DOCTOR", "SPECIALIZATION", "FROM", "TO", "LIST"];
    if (!actions) {
      setHeaders(keys);
    } else {
      setHeaders(columns);
    }
  }, []);
  const countSlots = (start, end, length) => {
    const startTime = new Date("11.02.2022 " + start).getTime() / 1000;
    const endTime = new Date("11.02.2022 " + end).getTime() / 1000;
    const minutes = Math.abs(endTime - startTime) / 60;
    console.log(minutes / 20, length);
    if (minutes / 20 === length) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {headers.map((name) => (
                    <th
                      scope="col"
                      key={name}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {name}
                    </th>
                  ))}
                  {actions && (
                    <th
                      scope="col"
                      key={"slots"}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Slots
                    </th>
                  )}
                </tr>
              </thead>
              <tbody
                className="bg-white divide-y divide-gray-200 overflow-y-scroll w-full"
                style={{ height: "100px" }}
              >
                {list.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {person.doctor}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.specialization}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.from}</div>
                    </td>{" "}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.to}</div>
                    </td>
                    {actions && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.price}
                        </div>
                      </td>
                    )}
                    <td className="px-6 py-4">
                      {actions &&
                      !countSlots(
                        person.from,
                        person.to,
                        person.appointments.length
                      ) ? (
                        <Link
                          to={`/booking/${clinic}/${person.doctor}`}
                          className=" text-green-900 underline"
                        >
                          Book
                        </Link>
                      ) : (
                        actions && <label className="text-gray-300">Book</label>
                      )}
                      {!actions && (
                        <Link
                          to={`/appointments/${clinic}/${person.doctor}`}
                          className=" text-orange-900 underline"
                        >
                          List
                        </Link>
                      )}
                    </td>
                    {actions && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {countSlots(
                            person.from,
                            person.to,
                            person.appointments.length
                          )
                            ? "No slots Available"
                            : "Slots Available"}
                        </span>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Table.defaultProps = {
  list: [],
  columns: [],
  clinic: "",
  actions: false,
};

export default Table;
