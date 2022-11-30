<template>
  <a
    :href="eventData.link"
    :data-time="new Date(`${eventData.date}T${eventData.time}Z`).getTime()"
    class="event-link block pb-3 mt-4 md:opacity-80 transition-colors duration-300 ease-in-out cursor-pointer md:hover:opacity-100 md:hover:shadow-bottom-fluo"
    target="_blank"
  >
    <p class="text-xl">{{ eventData.place }}</p>
    <p class="text-sm font-bold text-gray-400">
      {{ eventData.town }}
    </p>
    <p class="font-bold text-fluo-green">
      {{
        new Date(`${eventData.date}T${eventData.time}Z`).toLocaleDateString(
          locale,
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        )
      }}

      <span> — {{ eventData.time }}h</span>
    </p>
  </a>
</template>

<script lang="ts" setup>
import type { EventData, Locale } from "../bin/types";

const { eventData, locale } = defineProps<{
  eventData: EventData;
  locale: Locale;
}>();
</script>
