/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "icon": "url('../images/bg-icon.png')",
        "flag": "url('../images/bg-flag.png')",
      },
      backgroundPosition: {
        "hurmbergar": "-20px -378px",
        "amazon": "-10px -50px",
        "user": "-141px -300px",
        "cart": "-10px -240px",
        "search": "-73px -239px",
        "location": "-75px -340px",
        "language": "-77px -24px",
        "flag": "-54px -108px",
      },
      backgroundSize: {
        "275px": "275px",
        "194-295": "194px 295px"
      },
      colors: {
        "primary": "#232f3e",
        "primary-light": "#fcbb6a",
        "secondary": "#37475A",
        "product": "#0f1111",
        "yellow": "#FFD814",
        "orange": "#f90",
        "orange-light": "#fcbb6a",
        "link": "#007185",
        "footer": "#131A22",
      },
      fontFamily: {
        "amazon-ember": "Amazon Ember"
      }
    },
  },
  plugins: [],
}

