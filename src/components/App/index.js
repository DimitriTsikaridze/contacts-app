import { useState } from "react";
import ContactList from "../ContactList";
import Modal from "../Modal";
import "./index.css";

const App = () => {
  const [modalIsOn, setModalIsOn] = useState(false);
  const contactsDefaultState = localStorage.getItem("contacts")
    ? JSON.parse(localStorage.getItem("contacts"))
    : [];
  const [contacts, setContacts] = useState(contactsDefaultState);

  const deleteContact = (id) => {
    const deleteFromContacts = (contacts) =>
      contacts.filter((c) => c.id !== id);
    const newContacts = deleteFromContacts(contacts);
    const localStorageContacts = JSON.parse(localStorage.getItem("contacts"));
    localStorage.setItem(
      "contacts",
      JSON.stringify(deleteFromContacts(localStorageContacts))
    );
    setContacts(newContacts);
  };

  return (
    <>
      <button onClick={() => setModalIsOn(true)} id="add-new-contact">
        Add Contact
      </button>
      <ContactList
        onDeleteContact={(id) => deleteContact(id)}
        contacts={contacts}
        onSetContacts={setContacts}
      />
      {modalIsOn && (
        <Modal onSetModalIsOn={setModalIsOn} onSetContacts={setContacts} />
      )}
    </>
  );
};

export default App;
