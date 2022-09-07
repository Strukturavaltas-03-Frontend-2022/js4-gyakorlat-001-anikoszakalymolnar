/* Írj egy függvényt, convertToUppercase() néven, mely paraméterként kap egy tömböt.
A függvény visszatérési érték egy Promise.
Amennyiben a tömb minden eleme string, és sikeresen nagybetűssé alakíthatók a Promise resolved lesz
és visszaad egy új tömböt, ami az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.
Ellenkező esetben a Promise rejected lesz, a visszatérési érték a következő string:
'Error: Not all items in the array are strings!' */

function convertToUppercase(array = []) {
  return new Promise((resolve, reject) => {
    if (array.every((value) => typeof value === 'string')) {
      const newArray = array.map((value) => value.toUpperCase());
      resolve(newArray);
    } else {
      reject(new Error('Error: Not all items in the array are strings!'));
    }
  });
}

/* function convertToUppercase(array = []) {
  const allString = array.every((value) => typeof value === 'string');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (allString === true) {
        resolve(array.map((value) => value.toUpperCase()));
      } else {
        reject(new Error('Error: Not all items in the array are strings!'));
      }
    }, 0);
  });
}
 */
export default convertToUppercase;
