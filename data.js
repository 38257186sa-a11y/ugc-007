// data.js

// Subjects available
const subjects = ["Political Science", "History", "Economics", "Philosophy"];

// Questions database: questions[subject][year] = [{question, options, answer, explanation}]
const questions = {
    "Political Science": {
        2015: [
            {
                question: "Who is considered the father of Political Science?",
                options: ["Plato","Aristotle","Machiavelli","Socrates"],
                answer: 1,
                explanation: "Aristotle is known as the father of Political Science."
            },
            {
                question: "The term 'Liberty' means?",
                options: ["Absence of law","Freedom under law","Unlimited freedom","Obedience"],
                answer: 1,
                explanation: "Liberty is freedom under law."
            }
        ],
        2016: [
            {
                question: "Sovereignty refers to?",
                options: ["Supreme authority","Democracy","Freedom","Justice"],
                answer: 0,
                explanation: "Sovereignty is the supreme authority of the state."
            }
        ]
    },

    "History": {
        2015: [
            {
                question: "Who was the first Mughal emperor?",
                options: ["Akbar","Babur","Humayun","Aurangzeb"],
                answer: 1,
                explanation: "Babur founded the Mughal dynasty in India."
            }
        ],
        2016: [
            {
                question: "When did India gain independence?",
                options: ["1945","1947","1950","1952"],
                answer: 1,
                explanation: "India became independent on 15 August 1947."
            }
        ]
    },

    "Economics": {
        2015: [
            {
                question: "What is GDP?",
                options: ["Gross Domestic Product","General Debt Payment","Global Development Plan","Government Development Policy"],
                answer: 0,
                explanation: "GDP is the total value of goods and services produced in a country."
            }
        ],
        2016: [
            {
                question: "Inflation means?",
                options: ["Decrease in prices","Increase in prices","Stable prices","Government spending"],
                answer: 1,
                explanation: "Inflation is the sustained rise in general price levels."
            }
        ]
    },

    "Philosophy": {
        2015: [
            {
                question: "Who is the father of modern philosophy?",
                options: ["Kant","Descartes","Hume","Plato"],
                answer: 1,
                explanation: "René Descartes is considered the father of modern philosophy."
            }
        ],
        2016: [
            {
                question: "Kantian ethics is based on?",
                options: ["Consequences","Duty","Happiness","Tradition"],
                answer: 1,
                explanation: "Kantian ethics focuses on duty and moral rules."
            }
        ]
    }
};
