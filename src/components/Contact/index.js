import "./contact.css";

const Contact = ({
  contactData,
  checkedIds,
  onToggleContactFromList,
  onDeleteContact,
}) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          onChange={(e) => onToggleContactFromList(e, contactData.id)}
          checked={checkedIds.includes(contactData.id)}
        />
      </td>
      <td>
        <i
          onClick={() => onDeleteContact(contactData.id)}
          className="fa fa-trash-o delete"
        />
      </td>
      <td>
        <i className="fa fa-pencil"></i>
      </td>
      <td>{contactData.name}</td>
      <td>{contactData.phoneNumber}</td>
    </tr>
  );
};

export default Contact;
