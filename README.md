# Student Task Manager

A simple React app (built with Vite) where students can add tasks, mark them as completed, and delete them.

## Features
- Display tasks with title and status
- Add a new task (empty tasks are rejected with an error message)
- Mark a task as completed (checkbox)
- Delete a task (with confirmation)
- "No tasks available" message when the list is empty
- Task statistics: total, completed, remaining
- Filter tasks: All / Completed / Pending
- Reusable `Card` component using the `children` prop
- `ErrorBoundary` fallback UI if the task list fails to render

## React topics used
Components, JSX, props, events, `useState`, conditional rendering, component composition, error handling.

## Run locally
```bash
npm install
npm run dev
```
