# PathCredit Logger

A mini PathCredit Logger built for the Studor Builder Screening Project. It is a simple web app where a student can log their activities and see them listed

---

## How to run it locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## What I built

A simple React + Vite app with two panels:

**1. Log Your Activity - the Left panel**
- A form with three inputs:- activity name, dropdown for category (Academic/Technical/Cultural/Sports) and date
- Checks if the name is empty and shows an error message if submitted empty (an Edge Case)
- Prevents users from selecting future dates from the calendar (an Edge Case)
- Clicking the "Log Activity" button adds activity to the feed, provided that the name is not empty

**2. Activity Feed - the Right panel**
- Shows a list of all logged activities with its name, category and date
- The date has been formatted for a better UX
- Filter buttons for each category along with an ALL activities button
- Color coded cards to quickly distinguish categories for a better UX
- Handles empty state when no activities have been logged (an Edge Case)
- "No activities in this category" message when no activity of that category has been logged (an Edge Case)

**3. For Persistence**
- I am saving the activities to "localStorage" so the feed would persist even after page reloads or after closing the app

---


## What I would add/change with another hour

- **Delete an activity** : Add a delete button to remove a specific activity
- **Weights per category** : Adding weights to categories and then calculating total PathCredits
- **Sort by date** : Add a feature to show the activities sorted on the basis of date
- **Activity count badge** : Add a number on each category's filter button to display how many entries belong to that category
- **Dark mode toggle** : Add a button at the top of the page to switch between light and dark themes. Additionally, we can save the preference to "localStorage" so it persists across reloads
- **Success message** : A toast or a green flash on the card when an activity is successfully added
- **Category colour on dropdown** : Display the color associated with each category next to its name on the dropdown

**Making it Scalable**
- **Backend + Database** : Replacing localStorage with a Node/Express API + PostgreSQL for multiple students, persistent data and Analytics
- **User Authentication** : Add auth so that every student has their own separate feed
- **Pagination** : Rendering the activities in pages instead of all at once to avoid performance issues at scale