<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import PollList from "./components/PollList.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import Tabs from "./shared/Tabs.svelte";

	// tabs
	let items = ["Current Polls", "Add New Poll"];
	let activeItem = "Current Polls";

	const tabChange = (e) => {
		activeItem = e.detail;
	};

	// polls
	// let polls = [
	// 	{
	// 		id: 1,
	// 		question: "React or Angular",
	// 		answerA: "React",
	// 		answerB: "Angular",
	// 		votesA: 15,
	// 		votesB: 9,
	// 	},
	// 	{
	// 		id: 2,
	// 		question: "Ice Cream or Chocolate",
	// 		answerA: "Ice Cream",
	// 		answerB: "Chocolate",
	// 		votesA: 5,
	// 		votesB: 11,
	// 	},
	// ];

	const handleAdd = (e) => {
		// const poll = e.detail;
		// polls = [poll, ...polls];

		// console.log(polls);
		activeItem = "Current Polls";
	};

	// const handleVote = (e) => {
	// 	const { id, option } = e.detail;

	// 	let copiedPolls = [...polls];
	// 	let upvotedPoll = copiedPolls.find((poll) => poll.id === id);

	// 	if (option === "a") {
	// 		upvotedPoll.votesA++;
	// 	}
	// 	if (option === "b") {
	// 		upvotedPoll.votesB++;
	// 	}

	// 	polls = copiedPolls;
	// };
</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === "Current Polls"}
		<!-- <PollList {polls} on:vote={handleVote} /> -->
		<!-- <PollList on:vote={handleVote} /> -->
		<PollList />
	{:else if activeItem === "Add New Poll"}
		<CreatePollForm on:add={handleAdd} />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
