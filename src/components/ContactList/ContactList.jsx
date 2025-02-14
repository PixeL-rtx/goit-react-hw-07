import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import Loader from "../../Loader/Loader";
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/selectors";
import css from "./ContactList.module.css";

// const getVisibleContacts = contacts.filter(({ name }) =>
//   name.toLowerCase().includes(filter.toLowerCase())
// );
const ContactList = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {loading && <Loader />}
      {!loading &&
        contacts &&
        !error &&
        contacts.map(({ id, number, name }) => (
          <Contact key={id} id={id} number={number} name={name} />
        ))}
      {error && <div>`Error: ${error} `</div>}
    </ul>
  );
};

export default ContactList;
