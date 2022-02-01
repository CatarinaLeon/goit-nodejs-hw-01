const fs = require('fs/promises');
const path = require('path');

// contacts.js

// Раскомментируй и запиши значение

const contactsPath = path.join(__dirname, 'db/contacts.json');


// TODO: задокументировать каждую функцию
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  if (!result) return null;
  return result;
}

const removeContact = async (contactId) => {
  const contacts = await listContacts();


}

const addContact = async(name, email, phone)=> {
  const contacts = await listContacts();
  // ...твой код
}

module.exports ={listContacts, getContactById, removeContact, addContact}