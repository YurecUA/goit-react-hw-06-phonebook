export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const filteredContacts = state => {
  const contacts = getItems(state);
  const filter = getFilter(state);

  const getFiltredContacts = contacts => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(person =>
      person.name.toLowerCase().includes(lowerCaseFilter),
    );
  };
  return getFiltredContacts(contacts);
};
