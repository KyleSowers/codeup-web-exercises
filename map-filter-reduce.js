'use strict'

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Exercise: .filter for user objects with at least 3 languages
    let atLeast3lang = users.filter((lang) => {
        return lang.languages.length > 2;
    })

    console.log(atLeast3lang);

// Exercise: .map array of strings, each element is a user's email address
    let emailArray = users.map((emails) => {
        return emails.email;
});

    console.log(emailArray);

// Exercise: .reduce/get total years experience from users. Then calculate average
    let experienceTotal = users.reduce((total, yearsExperience) => {
        return total + yearsExperience.yearsOfExperience;
    }, 0)

    console.log(experienceTotal);

    let experienceAverage = experienceTotal / users.length;

    console.log(experienceAverage);

// Exercise: .reduce to get longest email address
    let longestEmail = users.reduce((total, longest) => {
       if (total.length < longest.email.length) {
           total = longest.email;
       }
        return total;
    }, '');

    console.log(longestEmail);

// Exercise: .reduce/get single string list of user's names
    let stringName = users.reduce((accumulator, user, index) => {
        if (index === (users.length - 1)) {
            return accumulator +=`${user.name}.`;
        } else {
            return  accumulator += `${user.name}, `;
        }
    }, 'Your Instructor are: ')
    console.log(stringName);

// Exercise: .reduce/get unique language list from users (php/java)
    let uniqueLanguages = users.reduce((accumulator, user, index ) => {
        for (let i = 0; i < user.languages.length; i++) {
            if (accumulator.includes(user.languages[i])) {
                return accumulator;
            } else {
                accumulator.push(user.languages[i])
            }
        } return accumulator;
    }, []);
console.log(uniqueLanguages);