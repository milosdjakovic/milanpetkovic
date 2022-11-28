<template>
  <h2 class="text-3xl text-fluo-green">
    {{ upcomingEventsExist ? upcomingEventsTitle : noEventsTitle }}
  </h2>

  <div
    v-if="upcomingEventsExist"
    v-for="event in upcomingEvents"
    :key="event.date + event.link"
  >
    <EventLink :eventData="event" :locale="locale" />
  </div>

  <div class="h-4"></div>
</template>

<script setup lang="ts">
import EventLink from "./EventLink.vue";

import type { EventData, Locale } from "../bin/types";
import { onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";

const { upcomingEventsTitle, noEventsTitle, events, locale } = defineProps<{
  upcomingEventsTitle: string;
  noEventsTitle: string;
  events: EventData[];
  locale: Locale;
}>();

const upcomingEvents = ref<EventData[]>([]);
const upcomingEventsExist = computed(() => upcomingEvents.value.length > 0);

function checkForUpcomingEvents(events: EventData[]) {
  return events.filter((event) => {
    const eventDate = new Date(`${event.date}T${event.time}Z`).getTime();

    const currentDate = Date.now();

    return eventDate > currentDate;
  });
}

onMounted(() => {
  upcomingEvents.value = checkForUpcomingEvents(events);
});
</script>

<style scoped></style>
