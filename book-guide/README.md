# React + Vite
Book Guide

1. Book Guide is a site where reader can check the current ranking of NYT best sellers list so that they can choose their next reading adventure.
With the guide readers can see where books stand in rankings by current rank, rank last week, and weeks on the list.
Readers can also use the Reviews link to see the books reviewed by The New York Times.  The search is by author's name and lists the books that were reviewed.

2. Screenshots of app.
![Alt text](<Screenshot 2023-08-15 at 2.12.18 PM.png>)
![Alt text](<Screenshot 2023-08-15 at 2.17.48 PM.png>)
![Alt text](<Screenshot 2023-08-15 at 2.18.18 PM.png>)

3. List of technologies used.
  MongoDB
  Express
  React
  Node.js
  SemanticUI

4. Installation instructions
- Fork this repository
- Install all dependencies
  - Run "npm i" in the command line.
- Create .env file in root folder and add the following:
  - PORT=3000
  - MONGOGBURI="your connection string here"
  - VITE_BOOK_KEY="API key from NYT DEV"

5. User Stories
- I would like see what the bestselling books are by ranking, because I think they would be a better read if many people are reading it.
- I want to be able to search for books by a particular author and see the reviews of the books by NYT.
- I would like a single simple list of buying options so that I can comparison shop.

6. Wireframes
https://docs.google.com/presentation/d/e/2PACX-1vSqRp1fHdH683EVac52UQhN-I9egOOxQ2J7NFJCbpabcpo3fzIjr0vwVoUMzN794ZYBnOyF-Vjc7qn7/pub?start=false&loop=false&delayms=3000

7. Unsolved problems or major hurdles
- Trying to style components imported into other components has been difficult.

8. Next Steps
- I think I would remove Semantic UI and use Tailwind for styling and use Adobe Fresco to redesign the background image.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
