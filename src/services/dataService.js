import logements from '../data/logements.json';


/* "getAllHousings" is a function that returns a Promise which is resolved with  entire list of housings.             **
** This function simulates an asynchronous operation, such as a network request to fetch data from a server.          **
** In reality, it just returns a Promise that is immediately resolved with data imported from 'logements.json' file.  */

export function getAllHousings() {
  return new Promise((resolve, reject) => {
    resolve(logements);
  });
}

/* "getHousingById" is a function that accepts an ID of a housing as a parameter and            **
** returns corresponding housing object from 'logements.json' data.                             **
** This function uses Array 'find' method to search through 'logements' array and               **
** returns first element that satisfies provided testing function.                              **
** Here, testing function checks if 'id' property of a housing object is equal to provided ID.  */

export function getHousingById(id) {
  return logements.find((housing) => housing.id === id);
}