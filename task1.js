let my_arr= [23, 'Jane', 560, ['Lesson', 'Maths', {'currency' : 'KES'}], 987, 76, 'John']


console.log(my_arr[3][2]) //{currency: 'KES'}

my_arr[3][2].amount = 90

console.log(my_arr[3][2]) //{currency: 'KES', amount: 90}


// 4. In the object with the key currency, add another key “amount” with value 90



// 5. Reverse 987 to 789 without using an inbuilt -method or Assigning 789 manually.
//      Hint: arrays can be reversed using reverse() functions


my_arr[4] = Number(String(my_arr[4]).split('').reverse().join(''))
console.log(my_arr[4])//789
console.log(my_arr) //[23, 'Jane', 560, Array(3), '789', 76, 'John']



const userProfile = {
         id: 101,
         name: {
            first: "Brian",
            last: "Letting",
         },
         contact: {
            email: "jeff@example.com",
            phones: ["+254700000001", "+254700000002"],
         },
         address: {
            current: {
               city: "Nairobi",
               street: "Westlands Ave",
               postalCode: "00100",
            },
            previous: [
               {
               city: "Eldoret",
               street: "Main Street",
               postalCode: "30100",
               },
               {
               city: "Kisumu",
               street: "Lake View Road",
               postalCode: "40100",
               },
            ],
         },
         preferences: {
            theme: "dark",
            language: "en",
            notifications: {
               email: true,
               sms: false,
               push: ["promotions", "updates"],
            },
         },
         projects: [
            {
               id: 1,
               name: "POS System",
               technologies: ["React", "FastAPI", "PostgreSQL"],
               tasks: [
               { title: "Set up DB", done: true },
               { title: "Design UI", done: false },
               ],
            },
            {
               id: 2,
               name: "Portfolio Website",
               technologies: ["HTML", "CSS", "JavaScript"],
               tasks: [
               { title: "Create About Page", done: true },
               { title: "Deploy to Netlify", done: false },
               ],
            },
        ],
};

console.log(Object.keys(userProfile))
//['id', 'name', 'contact', 'address', 'preferences', 'projects']

console.log(userProfile.projects[0].technologies[2])  //'PostgreSQL'

















