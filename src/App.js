import React, { Component } from "react";
import RenderTableData from "./RenderTableData";
import RenderTableHeader from "./RenderTableHeader";
import "./styles.css";

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Dimba",
        company: "Cognizant",
        designation: "Associate",
        city: "Pune"
      },
      {
        id: 2,
        name: "Pimba",
        company: "Syntel",
        designation: "Developer",
        city: "Hyderabad"
      },
      {
        id: 3,
        name: "Simba",
        company: "Infosys",
        designation: "System Engineer",
        city: "Bangalore"
      },
      {
        id: 4,
        name: "Himba",
        company: "Amazon",
        designation: "Senior Developer",
        city: "Delhi"
      }
    ],
    isEditable: false,
    editRowId: null,
    personToBeEdited: {}
  };

  findPersonByID = id => {
    const persons = [...this.state.persons];
    return persons.filter(person => {
      return person.id === id;
    })[0];
  };

  findIndexByID = () => {
    const persons = [...this.state.persons];
    return persons.findIndex(person => person.id === this.state.editRowId);
  };

  inputChangeHandler = e => {
    const { name, value } = e.target;
    const person = { ...this.state.personToBeEdited };
    person[name] = value;
    this.setState({
      personToBeEdited: person
    });
  };

  //################ Button handlers  ########### //

  editBtnHandler = person => {
    this.setState({
      isEditable: true,
      editRowId: person.id,
      personToBeEdited: person
    });
  };

  updateBtnHandler = index => {
    const persons = [...this.state.persons];
    //const indexToBeUpdated = this.findIndexByID();
    const indexToBeUpdated = index;
    const updatedPersonData = { ...this.state.personToBeEdited };
    this.setState({
      editRowId: null,
      persons: [
        ...persons.slice(0, indexToBeUpdated),
        (persons[indexToBeUpdated] = updatedPersonData),
        ...persons.slice(indexToBeUpdated + 1)
      ]
    });
  };

  cancelBtnHandler = () => {
    this.setState({
      editRowId: null,
      personToBeEdited: {}
    });
  };

  render() {
    const {
      state: { persons, editRowId, isEditable, personToBeEdited },
      editBtnHandler,
      inputChangeHandler,
      cancelBtnHandler,
      updateBtnHandler
    } = this;
    return (
      <div>
        <table id="persons">
          <thead>
            <tr>
              <RenderTableHeader person={persons[0]} />
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <RenderTableData
              persons={persons}
              editBtnHandler={editBtnHandler}
              isEditable={isEditable}
              personToBeEdited={personToBeEdited}
              editRowId={editRowId}
              inputChangeHandler={inputChangeHandler}
              cancelBtnHandler={cancelBtnHandler}
              updateBtnHandler={updateBtnHandler}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
