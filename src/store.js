import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /**
     * Projects Array
     */
    projects: [
      {
        title: "Orion",
        type: "Website",
        description: "Call of Duty: Modern Warfare 2 camouflage tracker",
        url: "https://orion.emca.app/"
      },
      {
        title: "Vanguard",
        type: "Website",
        description: "Call of Duty: Vanguard camouflage tracker",
        url: "https://vanguard.emca.app/"
      },
      {
        title: "Cold War",
        type: "Website",
        description: "Call of Duty: Cold War camouflage tracker",
        url: "https://coldwar.vercel.app/"
      },
      {
        title: "Damascus",
        type: "Website",
        description: "Call of Duty: Modern Warfare camouflage tracker",
        url: "https://damascus.vercel.app/"
      },
      {
        title: "Blabber",
        type: "Website",
        description: "Anonymous real-time chat application",
        url: "https://blabber.vercel.app/"
      },
      {
        title: "Flipart",
        type: "Website",
        description: "Portfolio for the production company Flipart.",
        url: "https://flipart.se/"
      },
      {
        title: "Quotes New Tab",
        type: "Chrome Extension",
        description: "A new motivational quote in every new tab.",
        url: "https://quotesnewtab.com/"
      },
      {
        title: "Movie Quotes",
        type: "Chrome Extension",
        description: "Famous quotes from movies and TV shows featured right on your new tab.",
        url: "https://chrome.google.com/webstore/detail/movie-quotes/mfjcannlflknklpcgjpiakpinbnoikik"
      },
      {
        title: "Quotes API",
        type: "API",
        description: "The API that powers Quotes New Tab.",
        url: "https://github.com/quotesnewtab/api"
      },
      {
        title: "Lyrics",
        type: "Website",
        description: "Search for your favorite artist and song to get the lyrics.",
        url: "https://lyrics.emilcarlsson.se/"
      }
    ],

    /**
     * Colors Array
     * Colors by: https://flatuicolors.com/palette/defo
     */
    colors: [
      "#1abc9c", // Turquoise
      "#2ecc71", // Emerald (Green)
      "#3498db", // Peter River (Blue)
      "#9b59b6", // Amethyst (Pruple)
      "#e67e22", // Carrot (Orange)
      "#e74c3c"  // Alizarin (Red)
    ]
  }
})
