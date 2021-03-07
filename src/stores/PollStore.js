import { writable } from 'svelte/store';

const PollStore = writable([
    {
        id: 1,
        question: "React or Angular",
        answerA: "React",
        answerB: "Angular",
        votesA: 15,
        votesB: 9,
    },
    {
        id: 2,
        question: "Ice Cream or Chocolate",
        answerA: "Ice Cream",
        answerB: "Chocolate",
        votesA: 5,
        votesB: 11,
    },
]);

export default PollStore;