//your JS code here. If required.
function manipulateData(inputArray) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  });
  
  promise.then(array => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredArray = array.filter(num => num % 2 === 0);
        resolve(filteredArray);
      }, 1000);
    });
  })
  .then(filteredArray => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const multipliedArray = filteredArray.map(num => (num * 2)/2);
        resolve(multipliedArray);
      }, 2000);
    });
  })
  .then(finalArray => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = finalArray.join(", ");
  })
  .catch(error => {
    console.error(error);
  });
}


manipulateData([1, 2, 3, 4]);
