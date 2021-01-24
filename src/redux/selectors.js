const getContacts = state => state.items;
const getFilter = state => state.filter;

const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

export { getContacts, getFilter, getVisibleContacts };
