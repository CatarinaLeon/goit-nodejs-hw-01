const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'db/contacts.json');

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
  const index = contacts.findIndex((item) => item.id === contactId)
  if (index === -1) return null
  const deleteContact = contacts[index]
  contacts.splice(index, 1)
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null,2))
  return deleteContact;

}

const addContact = async(id, name, email, phone)=> {
  const contacts = await listContacts();
  const data = {id, name, email, phone };
  contacts.push(data);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return data;
}

module.exports ={listContacts, getContactById, removeContact, addContact}