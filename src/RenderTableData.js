import React from "react";

const RenderTableData = ({
  persons,
  editBtnHandler,
  editRowId,
  isEditable,
  personToBeEdited,
  inputChangeHandler,
  cancelBtnHandler,
  updateBtnHandler
}) => {
  const columns = () => {
    return Object.entries(personToBeEdited).map(([key, value], index) => {
      if (key !== "id") {
        return (
          <td key={index}>
            <input
              type="text"
              name={key}
              value={value}
              onChange={inputChangeHandler}
            />
          </td>
        );
      } else {
        return <td key={`${key - value}`}>{value}</td>;
      }
    });
  };

  return persons.map((person, index) => {
    if (person.id === editRowId) {
      return (
        <tr key={person.id}>
          {columns()}
          <td>
            <button onClick={() => updateBtnHandler(index)}>Update</button>
            <button onClick={cancelBtnHandler}>Cancel</button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr key={person.id}>
          <td>{person.id}</td>
          <td>{person.name}</td>
          <td>{person.company}</td>
          <td>{person.designation}</td>
          <td>{person.city}</td>
          <td>
            <button onClick={() => editBtnHandler(person)}>Edit</button>
          </td>
        </tr>
      );
    }
  });
};

export default RenderTableData;
