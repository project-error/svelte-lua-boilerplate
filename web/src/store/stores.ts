import { writable } from "svelte/store";

/** Returns boolean value of if the resource is visible or not */
export const visibility = writable(false);
