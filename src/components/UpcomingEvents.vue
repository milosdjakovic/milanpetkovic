<template>
  <h2 class="text-3xl text-fluo-green">
    {{ upcomingEventsExist ? upcomingEventsTitle : noEventsTitle }}
  </h2>

  <div
    v-if="upcomingEventsExist"
    v-for="event in upcomingEvents"
    :key="event.date + event.link"
  >
    <EventLink :event="event" :locale="locale" />
  </div>

  <div class="h-4"></div>
</template>

<script setup lang="ts">
import type { Event, Locale } from "../bin/types";
import { onMounted, ref } from "vue";
import EventLink from "../components/EventLink.vue";
import { computed } from "@vue/reactivity";

const { events } = defineProps<{
  upcomingEventsTitle: string;
  noEventsTitle: string;
  events: Event[];
  locale: Locale;
}>();

const upcomingEvents = ref<Event[]>([]);
const upcomingEventsExist = computed(() => upcomingEvents.value.length > 0);

function checkForUpcomingEvents(events: Event[]) {
  upcomingEvents.value = events.filter((event) => {
    const eventDate = new Date(`${event.date}T${event.time}Z`).getTime();
    const currentDate = Date.now();

    return eventDate > currentDate;
  });
}

onMounted(() => {
  checkForUpcomingEvents(events);
});
</script>

<style scoped></style>
