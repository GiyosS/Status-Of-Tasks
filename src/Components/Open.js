import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Toggle_Modal from "../Modal/Toggle_Modal";
import { GithubContext } from "../context/context";
import { ToggleModal, Delete, EDIT_USER } from "../feacures/cards/Card_Slice";

function Open() {
  const data = React.useContext(GithubContext);
  const { setInputValue, setselectValue } = data;

  const [count, setCount] = useState("");
  const { todos } = useSelector((store) => store.Card_Slice);
  const dispatch = useDispatch();
  useEffect(() => {
    let a = todos.filter((item) => item.status === "Open");
    setCount(a);
  }, [todos]);

  function Edit(value) {
    dispatch(EDIT_USER(value));
    setInputValue(value.title);
    setselectValue(value.status);
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <p>Open</p>
        </div>
        <div className="col-md-1">
          <h3>{count.length}</h3>
        </div>
      </div>

      <div className={"d-grid gap-2 sider"}>
        <button
          className={" btn btn-success "}
          onClick={() => dispatch(ToggleModal())}
        >
          Add Task
        </button>
        <table className={"table mt-5"}>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todos
              .filter((item) => item.status === "Open")
              .map((value, index) => (
                <tr key={index}>
                  <td>{value.title}</td>
                  <td>{value.status}</td>
                  <td>
                    <button
                      className={"btn btn-warning"}
                      onClick={() => Edit(value)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className={"btn btn-danger"}
                      onClick={() => dispatch(Delete(value, index))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Toggle_Modal />
    </div>
  );
}

export default Open;
