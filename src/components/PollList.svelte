<script>
    // import { onDestroy, onMount } from "svelte";
    import PollStore from "../stores/PollStore";
    import PollDetails from "./PollDetails.svelte";

    // export let polls = [];

    // const unsub = PollStore.subscribe((data) => {
    //     polls = data;
    // });

    // onMount(() => {});

    // onDestroy(() => {
    //     unsub();
    // });
</script>

<div class="poll-list">
    <!-- {#each polls as poll (poll.id)} -->
    {#each $PollStore as poll (poll.id)}
        <div>
            <!-- <PollDetails {poll} on:vote /> -->
            <PollDetails {poll} />
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>
