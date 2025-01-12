/*function handlePromise(flag) {
    return new Promise(function (resolve, reject) {
        if (flag === 1) {
            resolve("Promise successfully resolved");
        } else if (flag === 0) {
            reject("Promise encountered an error");
        }
    });
}

handlePromise(0)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
*/

// Example: Location verification with Promise
// Pass two parameters - "Sydney", 1500

findLocation("Sydney", 1500)
    .then((output) => {
        console.log(output);
    })
    .catch((error) => {
        console.log(error);
    });

findLocation = (place, duration) => {
    return new Promise(() => {
        if (verifyLocation(place, duration)) {
            locationDetected(place, "located within", duration, "milliseconds");
        } else {
            locationNotDetected(place, "not located within", duration, "milliseconds");
        }
    });
};

function verifyLocation(city, time) {
    const validCity = "Sydney";
    const maxTime = 1500;
    return city === validCity && time <= maxTime;
}
