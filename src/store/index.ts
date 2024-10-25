import { produce } from 'immer';
import { type StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
type Contact = {
  avatar: string;
  name: string;
  email: string;
  archived?: boolean;
};

type ContactsSlice = {
  contacts: Contact[];
  setArchived: (item: Contact) => void;
  setContacts: (contacts: Contact[]) => void;
};

type Store = ContactsSlice;

const createContactsSlice: StateCreator<
  Store,
  [['zustand/devtools', never]],
  [],
  ContactsSlice
> = set => ({
  contacts: [],

  setContacts(contacts) {
    set(
      state =>
        produce(state, draft => {
          draft.contacts = contacts;
        }),
      undefined,
      'store: contacts/setContacts',
    );
  },
  setArchived: item => {
    set(
      state =>
        produce(state, draft => {
          if (!draft.contacts) return;
          const archivedItem = draft.contacts.find(
            contact => contact.email === item.email,
          );
          if (archivedItem) {
            archivedItem.archived = true;
          }
        }),
      undefined,
      'store: contacts/setArchived',
    );
  },
});

const useStore = create<Store>()(
  devtools((...args) => ({
    ...createContactsSlice(...args),
  })),
);
export default useStore;
