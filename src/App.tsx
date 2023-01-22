import React, { Fragment, useState } from "react";
import "./App.css";

function App() {
  const _items = [
    {
      document: "111111111",
      name: "jonny",
      chanel: "chat",
      startAttendance: "10:30",
      email: "jonny@test.com",
      isOpen: false,
      accounts: [
        {
          status: "normal",
          description: "",
          accountNumber: "222222222",
        },
        {
          status: "full canceled",
          description: "account cancelation",
          accountNumber: "222222223",
        },
      ],
    },
    {
      document: "222222222",
      name: "Anny",
      chanel: "phone",
      startAttendance: "10:25",
      email: "jonny@test.com",
      isOpen: false,
      accounts: [
        {
          status: "normal",
          description: "",
          accountNumber: "222222222",
        },
      ],
    },
  ];

  const [items, setItems] = useState(_items);
  const handleOpenHidden = (document: string) => {
    const result = items.map((item) => ({
      ...item,
      isOpen: item.document === document ? !item.isOpen : item.isOpen,
    }));
    setItems([...result]);
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>chanel</th>
            <th>start attendance</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Fragment key={item.document}>
              <tr
                onClick={() =>
                  item.accounts.length > 1 && handleOpenHidden(item.document)
                }
              >
                <td>{item.name}</td>
                <td>{item.chanel}</td>
                <td
                  className={`${
                    item.accounts.length > 1 && "menu__list-item-collapsible"
                  }  ${item.isOpen && "is-open"}`}
                >
                  {item.startAttendance}
                </td>
              </tr>

              {item.accounts.length > 1 &&
                item.accounts.map((account, index) => (
                  <tr
                    className={`panel ${item.isOpen ? "panel-is-open" : ""}`}
                    key={`${item.document}-${index}`}
                  >
                    <td>{item.name}</td>
                    <td>{account.status}</td>
                    <td>{account.accountNumber}</td>
                  </tr>
                ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
