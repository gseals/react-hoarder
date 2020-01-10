import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getItemsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allItems = result.data;
      const items = [];
      if (items != null) {
        Object.keys(allItems).forEach((itemId) => {
          const newItem = allItems[itemId];
          newItem.id = itemId;
          items.push(newItem);
        });
      }
      resolve(items);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleItem = (itemId) => axios.get(`${baseUrl}/items/${itemId}.json`);


export default { getItemsByUid, getSingleItem };
