import { writable } from 'svelte/store';

/** Whether the top announcement bar is visible */
export const announcementOpen = writable(true);
