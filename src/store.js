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
        title: "Damascus",
        type: "Website",
        description: "Simple, lightweight & intuitive camouflage tracker",
        url: "https://damascus.now.sh/"
      },
      {
        title: "Blabber",
        type: "Website",
        description: "Anonymous real-time chat application",
        url: "https://blabber-application.herokuapp.com/"
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
      }, 
      {
        title: "Striker",
        type: "Discord Bot",
        description: "A strike bot for Discord.",
        url: "https://github.com/carlssonemil/Striker"
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
