<template>
  <h2 class="text-3xl text-fluo-green">{{ upcomingEventTitle }}</h2>

  <section
    v-if="upcomingEventsExist"
    v-for="event in upcomingEvents"
    :key="event.date + event.link"
    class="mt-3"
  >
    <EventLink :eventData="event" :locale="locale" />
  </section>

  <div class="h-4"></div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";

import EventLink from "./EventLink.vue";
import { onMounted, ref } from "vue";

import type { EventData, Language, Locale } from "../bin/types";

import i18nData from "../data/i18n_data.json";

const { language, events, locale } = defineProps<{
  language: Language;
  events: EventData[];
  locale: Locale;
}>();

const upcomingEvents = ref<EventData[]>([]);
const upcomingEventsExist = computed(() => upcomingEvents.value.length > 0);
const upcomingEventTitle = computed(() =>
  upcomingEventsExist
    ? i18nData.events.upcoming[language]
    : i18nData.events.none
);

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
