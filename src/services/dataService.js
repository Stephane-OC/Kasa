import logements from '../data/logements.json';


/* "getAllHousings" is a function that returns entire list of housings.                 **
** Instead of simulating an asynchronous operation, it directly returns data imported from  **
** 'logements.json' file. This function is used to retrieve all housing data available.  */


export function getAllHousings() {
  return logements;
}

/* "getHousingById" is a function that accepts an ID of housing as a parameter and     **
** returns corresponding housing object from 'logements.json' data.                    **
** Function uses Array 'find' method to search through 'logements' array and           **
** returns first element that satisfies provided testing function.                     **
** Here, testing function checks if 'id' property of a housing object is equal to      **
** provided ID. Function is used to fetch details of specific housing based on its ID. */

export function getHousingById(id) {
  return logements.find((housing) => housing.id === id);
}