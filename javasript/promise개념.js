async function returnPromise3() {
    let promise;
    let result;

    console.log(1);


    promise = new Promise((resolve, reject) => {
        console.log(2);
        resolve('성공');
    });

    console.log(3);

    result = await promise;

    console.log(result);
}

returnPromise3();

console.log(4);