import React, { Fragment, useState } from "react";
import mockItem from "./mock";
import "./App.css";
import NavBar from "./NavBar";

function App() {
  const [items, setItems] = useState(mockItem);

  const handleOpenHidden = (document: string) => {
    const result = items.map((item) => ({
      ...item,
      isOpen: item.document === document ? !item.isOpen : item.isOpen,
    }));
    setItems([...result]);
  };

  const handleSelectItem = (selectItem: unknown, index: number = 0) => {
    console.log("here >>>", selectItem, (selectItem as any)?.accounts[index]);
  };

  return (
    <div className="App">
      <NavBar />
      <section className="wrapper">
        <article className="container">
          <h1>attendance</h1>
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
                      item.accounts.length > 1
                        ? handleOpenHidden(item.document)
                        : handleSelectItem(item)
                    }
                  >
                    <td>{item.name}</td>
                    <td>{item.chanel}</td>
                    <td
                      className={`${
                        item.accounts.length > 1 &&
                        "menu__list-item-collapsible"
                      }  ${item.isOpen && "is-open"}`}
                    >
                      {item.startAttendance}
                    </td>
                  </tr>

                  {item.accounts.length > 1 &&
                    item.accounts.map((account, index) => (
                      <tr
                        key={`${item.document}-${index}`}
                        className={`panel ${
                          item.isOpen ? "panel-is-open" : ""
                        }`}
                        onClick={() => handleSelectItem(item, index)}
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
          <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</h5>
        </article>
      </section>
    </div>
  );
}

export default App;
