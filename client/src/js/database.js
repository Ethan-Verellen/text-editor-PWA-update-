import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {console.error('putDb not implemented')
const tedb = await openDB('te', 1);
const tx = tedb.transaction('te', 'readwrite');
const st = tx.objectStore('te')
const re = st.put({ id:1, content });
const res = await re;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {console.error('getDb not implemented')
  const tedb = await openDB('te', 1);
const tx = tedb.transaction('te', 'readonly');
const st = tx.objectStore('te')
const re = st.get(1);
const res = await re;
return res?.value;
};

initdb();
