# Student E-Portfolio (ReactJS + Tailwind CSS)

A responsive student portfolio project built with ReactJS, Vite, and Tailwind CSS. It includes:
- Home/dashboard with welcome message and navigation
- About Me and personal background
- Skills section with interactive expand/collapse
- Projects/work samples
- Education and experience/resume section
- Contact form with input validation and local success feedback
- Responsive mobile navigation
- Smooth scrolling and hover effects

## Run locally

1. Install Node.js on your computer.
2. Extract this project folder.
3. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL Vite prints (usually `http://localhost:5173`).

To test the production build:

```bash
npm run build
npm run preview
```

## Personalize before submission

Search in `src/App.jsx` and replace:
- `Your Name` / `YN` with your name or initials
- `Your School Name` with your actual school
- `your.email@example.com` with your email
- Sample project descriptions with your real school projects
- GitHub and LinkedIn links with your own profile URLs

The contact form is a front-end demo. It validates required fields and displays a success message, but it does not send emails. To receive real messages, connect a form service or backend.

## Deploy on Vercel

1. Push the project folder to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Vercel should detect Vite automatically. Use:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy** and submit the resulting public URL.

## Deploy on Android

You can do the whole process on an Android phone using a browser and a cloud coding workspace such as StackBlitz, or by uploading the project to GitHub and importing it into Vercel. For the easiest path, create a GitHub repository, upload the files/folders, then import the repo in Vercel.
