import { Locale } from '../bin/types';
<template>
  <a
    :href="event.link"
    class="block pb-3 mt-4 transition-colors duration-300 ease-in-out cursor-pointer group hover:shadow-bottom-fluo"
    target="_blank"
  >
    <p class="text-xl group-hover:text-fluo-green">{{ event.place }}</p>
    <p class="text-sm font-bold text-gray-400 group-hover:text-fluo-green">
      {{ event.town }}
    </p>
    <p class="font-bold text-fluo-green group-hover:text-gray-400">
      {{
        new Date(`${event.date}T${event.time}Z`).toLocaleDateString(locale, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}
    </p>
  </a>
</template>

<script lang="ts" setup>
const { events } = defineProps<{
  event: Event;
  locale: Locale;
}>();
</script>
