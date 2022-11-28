<template>
  <a
    :href="eventData.link"
    :data-time="new Date(`${eventData.date}T${eventData.time}Z`).getTime()"
    class="event-link block pb-3 mt-4 transition-colors duration-300 ease-in-out cursor-pointer group hover:shadow-bottom-fluo"
    target="_blank"
  >
    <p class="text-xl group-hover:text-fluo-green">{{ eventData.place }}</p>
    <p class="text-sm font-bold text-gray-400 group-hover:text-fluo-green">
      {{ eventData.town }}
    </p>
    <p class="font-bold text-fluo-green group-hover:text-gray-400">
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
