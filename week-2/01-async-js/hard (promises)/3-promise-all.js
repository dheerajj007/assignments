/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function promiseResolve(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, t * 1000);
  });
}
function wait1(t) {
  return promiseResolve(t);
}

function wait2(t) {
  return promiseResolve(t);
}

function wait3(t) {
  return promiseResolve(t);
}

function calculateTime(t1, t2, t3) {
  let start = Date.now();
  const promises = [];
  promises.push(wait1(t1));

  promises.push(wait2(t2));

  promises.push(wait3(t3));

  return Promise.all(promises).then(function () {
    return Date.now() - start;
  });
}

module.exports = calculateTime;
