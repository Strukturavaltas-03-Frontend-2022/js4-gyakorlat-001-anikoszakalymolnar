/* Írj egy másik függvényt sortStrings() néven, mely paraméterként egy tömböt kap.
A függvény visszatérési érték egy Promise.
A Promise resolved lesz, amennyiben a tömb minden eleme string, a resolved
value az ABC szerinti rendezett tömb.
Ha nem minden elem string, akkor a Promise rejected lesz, az Error objektum üzenet szövege:
'Error: Not all items in the array are strings!'
Ha a sorba rendezés során hiba történik akkor is rejected lesz a Promise,
az Error objektum üzenet szövege ebben az esetben:
'Error: Something went wrong with sorting words.' */

function sortStrings(array = []) {
  return new Promise((resolve, reject) => {
    try {
      if (array.every((value) => typeof value === 'string')) {
        const capitalArray = array.sort((a, b) => a.localeCompare(b));
        resolve(capitalArray);
      } else {
        reject(new Error('Error: Not all items in the array are strings!'));
      }
    } catch {
      reject(new Error('Error: Something went wrong with sorting words!'));
    }
  });
}

export default sortStrings;
