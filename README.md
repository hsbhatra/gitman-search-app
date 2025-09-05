# Girman Search App

A React.js search-based web application that allows users to search for people and view their details.

## Project Overview

This application is built using React.js and provides the following functionality:
- Search for users by first name, last name, or address
- View search results in a card-based UI
- View detailed user information in a modal dialog
- Responsive design for both desktop and mobile devices

## Technologies Used

- React.js (functional components and hooks)
- React Router Dom for navigation
- Shadcn UI components for consistent design
- Radix UI Dialog for modals
- Local JSON data source

## Features

### Home Page
- Clean, minimal search interface
- Navigation bar with website, LinkedIn, and contact links
- Search input that navigates to results page on submission

### Search Results Page
- Displays filtered user cards based on search query
- Each card shows basic user information with a "Fetch Details" button
- Details modal shows comprehensive user information
- Empty state UI when no results are found

## Project Structure

The application is organized with the following structure:
- `/src/components` - Reusable UI components
- `/src/pages` - Main application pages
- `/src/data` - JSON data sources
- `/src/hooks` - Custom React hooks
- `/src/utils` - Helper functions

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```
npm install
```

### Running the Application

To start the development server:
```
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create a production build:
```
npm run build
```
