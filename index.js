function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(4000).then(() => {
    console.log('Promise resolved after 2000ms');
  }).catch(error=> console.log(error));








  function stepOne() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Step One Completed');
      }, 1000);
    });
  }
  
  function stepTwo(message) {
    console.log(message);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Step Two Completed');
      }, 2000);
    });
  }
  
  stepOne()
    .then(stepTwo)
    .then(result => {
      console.log(result);
    });
  
  
  
    const promise1 = Promise.resolve('Promise 1 resolved');
    const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2 resolved'));
    const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 3 resolved'));
    
    Promise.all([promise1, promise2, promise3])
      .then(values => {
        console.log(values);
      });
    

      function resolveAfter2Seconds() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('resolved after 2 seconds');
          }, 2000);
        });
      }
      
      async function asyncCall() {
        console.log('calling');
        const result = await resolveAfter2Seconds();
        console.log(result);
        // expected output: 'resolved after 2 seconds'
      }
      
      asyncCall();
      
       
      function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      async function interateWithAsyncAwait (arr) {
        for (let el of arr) {
            console.log(el);
            await delay(1000);
        }  
      }  


  let arr= [10,2,30,50,100]     
 
  interateWithAsyncAwait(arr);


function asyncTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
          resolve('Task completed successfully');
          console.log(randomNumber);
        } else {
          reject(new Error('Task failed'));
          console.log(randomNumber);
        }
      }, 1000);
    });
  }
  
  // Usage
  asyncTask()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  


function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
     
      setTimeout(() => {
        const data = { message: 'Data fetched successfully!' };
        resolve(data);
      }, 2000); 
    });
  }
  


function fetchDataFromAPI() {
    return new Promise((resolve) => {
       
        setTimeout(() => {
            resolve("Data from API"); 
        }, 2000); //
    });
}





function fetchDataFromAPI() {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            resolve("Data from API"); 
        }, 2000); 
    });
}


async function awaitCall() {
    try {
        console.log("Fetching data from API...");
        const data = await fetchDataFromAPI(); 
        console.log("Data received:", data); 
    } catch (error) {
        console.error("Error fetching data:", error); 
    }
}


awaitCall();







function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const success = Math.random() < 0.8; 
            if (success) {
                resolve("Data from API"); 
            } else {
                reject("Failed to fetch data from API"); 
            }
        }, 2000); 
    });
}


async function awaitCall() {
    try {
        console.log("Fetching data from API...");
        const data = await fetchDataFromAPI(); 
        console.log("Data received:", data); 
    } catch (error) {
        console.error("Error fetching data:", error); 
        console.log("Failed to fetch data from API. Please try again later."); 
    }
}


awaitCall();









async function chainedAsyncFunctions() {
    try {
        console.log("Starting chained async functions...");

     
        await firstAsyncFunction();
        console.log("First async function completed.");

        await secondAsyncFunction();
        console.log("Second async function completed.");

      
        await thirdAsyncFunction();
        console.log("Third async function completed.");

        console.log("All async functions completed.");
    } catch (error) {
        console.error("Error in chained async functions:", error); 
    }
}


async function firstAsyncFunction() {
    await delay(1000); 
    console.log("First async function executed after 1 second.");
}

async function secondAsyncFunction() {
    await delay(1000); 
    console.log("Second async function executed after 1 second.");
}

async function thirdAsyncFunction() {
    await delay(1000); 
    console.log("Third async function executed after 1 second.");
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


chainedAsyncFunctions();




const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];


async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
}


async function parallelCalls(urls) {
    try {
        console.log("Fetching data from URLs concurrently...");
        
    
        const promises = urls.map(url => fetchData(url));
        
     
        const results = await Promise.all(promises);
        
        console.log("All requests complete. Responses:");
        results.forEach((result, index) => {
            console.log(`Response from ${urls[index]}:`, result);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


parallelCalls(urls);


