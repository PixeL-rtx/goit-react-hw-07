import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

// export const selectStatusFilter = (state) => state.contacts.filters.status;
export const selectNameFilter = (store) => store.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) =>
    contacts?.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter?.toLowerCase())
    )
);
