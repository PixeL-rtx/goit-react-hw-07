import css from "./App.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/operations";

import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { selectIsLoading, selectError } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const { items, isLoading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.Form}>
      <p className={css.title}> Phonebook</p>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <div>
        <ContactList />
      </div>
    </div>
    // <div>
    //   {isLoading && <b>Loading tasks...</b>}
    //   {error && <b>{error}</b>}
    //   <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    // </div>
  );
}

export default App;
