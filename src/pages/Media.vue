<template>
  <Layout>
    <!-- Video section -->
    <div v-for="(video, i) in $page.lastVideo.edges" :key="`media_video_${i}`">
      <h1 class="text-2xl">{{ currentVideo.title[lang] }}</h1>

      <!-- Video -->
      <div
        class="relative mt-4"
        style="width: 100%; height: 0; padding-bottom: 56.25%;"
      >
        <iframe
          title="test"
          width="560"
          height="315"
          class="absolute top-0 left-0 w-full h-full"
          :src="currentVideo.link || video.node.link"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>

    <!-- Playlist title -->
    <h3
      v-for="(playlistTitle, i) in $page.allSiteData.edges"
      :key="`youtube_chanel_${i}`"
      class="mt-8 text-lg font-semibold"
    >
      {{ playlistTitle.node.pages.media.playlist[lang] }}:
    </h3>

    <!-- Playlist -->
    <ul class="mt-4 mb-12">
      <li
        v-for="(video, i) in $page.allVideos.edges"
        :key="`media_video_button_${i}`"
      >
        <button
          :class="
            currentVideo.title[lang] === video.node.title[lang] &&
              'text-fluo-green font-semibold'
          "
          class="flex flex-row-reverse py-2 xl:flex-row sm:py-1 focus:outline-none"
          @click="() => setCurrentVideo(video.node)"
        >
          <svg
            v-if="currentVideo.title[lang] === video.node.title[lang]"
            xmlns="http://www.w3.org/2000/svg"
            class="xl:-ml-8 xl:mr-2 icon icon-tabler icon-tabler-volume"
            width="24"
            height="24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path
              d="M15 8a5 5 0 010 8M17.7 5a9 9 0 010 14M6 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h2l3.5-4.5A.8.8 0 0111 5v14a.8.8 0 01-1.5.5L6 15"
            />
          </svg>

          <span
            class="mr-2 xl:mr-0"
            :class="currentVideo.title[lang] !== video.node.title[lang] && ''"
          >
            <!-- :style="
              currentVideo.title[lang] !== video.node.title[lang] &&
                'margin-left: calc(24px + 0.5rem)'
            " -->
            {{ video.node.title[lang] }}
          </span>
        </button>
      </li>
    </ul>

    <!-- Official Youtube Channel -->
    <a
      v-for="(channel, i) in $page.allSiteData.edges"
      :key="`media_playlist_title_${i}`"
      class="flex items-center link"
      href="https://www.youtube.com/user/MilanPetkovicTrio/videos"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 mr-1 icon icon-tabler icon-tabler-brand-youtube"
        viewBox="0 0 24 24"
        stroke-width="1.3"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="5" width="18" height="14" rx="4" />
        <path d="M10 9l5 3l-5 3z" />
      </svg>

      {{ channel.node.pages.media.youtube[lang] }}
    </a>
  </Layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  metaInfo: {
    title: "Discography",
  },
  data: () => ({
    currentVideo: {
      title: null,
      link: null,
    },
  }),
  methods: {
    setCurrentVideo({ title, link }) {
      this.currentVideo.title = title;
      this.currentVideo.link = link;
      // window.scrollY = 80

      window.scrollTo({
        top: 20,
        behavior: "smooth",
      });
    },
  },
  computed: {
    ...mapState(["lang"]),
  },
  created() {
    this.$page.lastVideo.edges.forEach((video) => {
      this.currentVideo.title = video.node.title;
      this.currentVideo.link = video.node.link;
    });
  },
};
</script>

<page-query>
query {
  allVideos(order: ASC) {
    edges {
      node {
        title {
          rs
          en
        }
        link
      }
    }
  }
  lastVideo: allVideos(limit: 1, order: ASC) {
    edges {
      node {
        title {
          rs
          en
        }
        link
      }
    }
  }
  allSiteData {
    edges {
      node {
        pages {
          media {
            playlist {
              rs
              en
            }
            youtube {
              rs
              en
            }
          }
        }
      }
    }
  }
}
</page-query>
