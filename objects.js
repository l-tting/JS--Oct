let person = {
    "name": "Alice Kamau",
    "age": 21,
    "address": "124 Monrovia St",
    is_student: true,
    "my skills": ["Cloud", "SRE"]
}


console.log(person)

//dot notation
console.log(person.name)

//bracket_notation
console.log(person["my skills"])
console.log(person['is_student'])

//methods
console.log(Object.keys(person)) //(5) ['name', 'age', 'address', 'is_student', 'my skills']

console.log(Object.values(person))//(5) ['Alice Kamau', 21, '124 Monrovia St', true, Array(2)]

console.log(Object.entries(person))//[Array(2), Array(2), Array(2), Array(2), Array(2)]




let person2 = {
    "name": "Jack",
    "skills": {
        "soft_skills": ["Comms"],
        "technical_skills": ["JS", "Cloud", "Platform"]
    },
    experience: ["Google", "AWS"]
}


console.log(Object.keys(person2)) //(3) ['name', 'skills', 'experience']

console.log(person2.skills.technical_skills[2]) //Platform




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
