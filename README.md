
# Notes Application

A simple and intuitive notes-taking web application built with React and Vite. This app allows users to create, edit, delete, and search through their notes, with data persisted locally in the browser.

## Features

- **Add Notes**: Create new notes with a title and content.
- **Edit Notes**: Modify existing notes directly.
- **Delete Notes**: Remove notes you no longer need.
- **Search Functionality**: Find notes by title or content (search input available in the notes display component).
- **Local Storage**: Notes are saved in your browser's local storage, so they persist between sessions.
- **Responsive Design**: Works on both desktop and mobile devices.
- **Modern UI**: Styled with Tailwind CSS for a clean and modern look.

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState)
- **Data Persistence**: Browser Local Storage

## Project Structure

```
NotesApplication/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── NotesPage/
│   │   │   ├── NoteCmponent.jsx    # Component for displaying and managing notes
│   │   │   └── NotesInterface.jsx  # Main interface for adding/editing notes
│   │   ├── App.jsx                 # Main app component
│   │   ├── index.css               # Global styles
│   │   └── main.jsx                # App entry point
│   ├── package.json
│   ├── vite.config.js
│   └── README.md                   # Default Vite README
└── README.md                       # This file
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd NotesApplication
   ```

2. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` (or the port shown in the terminal).

## Usage

1. **Adding a Note**:
   - Enter a title in the "Enter Notes Title" field.
   - Add content in the "Notes Content Here" textarea.
   - Click "Add Notes" to save.

2. **Editing a Note**:
   - Click the edit button on an existing note.
   - The note's content will populate the input fields.
   - Modify as needed and click "Add Notes" again.

3. **Deleting a Note**:
   - Click the delete button on the note you want to remove.

4. **Searching Notes**:
   - Use the search input in the notes display area to filter notes by title or content.

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the app for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint for code quality checks

## Future Enhancements

- Backend integration for cloud storage and user accounts
- Note categories/tags
- Rich text editing
- Note sharing functionality
- Dark mode toggle

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).


If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 4ad3d7922e42a10c5de15a5da2223df3210d7936
