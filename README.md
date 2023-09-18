# Angular JSONPlaceholder App

This is an Angular application that interacts with the JSONPlaceholder API to manage posts. It allows users to view a list of posts, view post details, add new posts, edit existing posts, and delete posts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Services](#services)
- [Routing](#routing)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd angular-jsonplaceholder-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   ng serve
   ```

5. Open your web browser and navigate to `http://localhost:4200/` to view the application.

## Usage

- View a list of posts on the homepage.
- Click on a post to view its details.
- Add a new post by clicking the "Add Post" button and filling in the form.
- Edit an existing post by clicking the "Edit" button on the post details page.
- Delete a post by clicking the "Delete" button on the post details page.

## Folder Structure

The project has the following folder structure:

- `src/app`: This folder contains the Angular application components and services.
- `src/app/components`: This folder contains the Angular components used in the application.
- `src/app/services`: This folder contains services for making HTTP requests to the JSONPlaceholder API.
- `src/app/app-routing.module.ts`: This file defines the application's routes.
- `src/app/app.module.ts`: This file defines the root module of the application.
- `src/assets`: This folder contains static assets such as images, styles, and fonts.

## Components

The application consists of the following components:

- `PostListComponent`: Displays a list of posts.
- `PostDetailComponent`: Displays the details of a specific post.
- `PostAddComponent`: Allows users to add a new post.
- `PostEditComponent`: Allows users to edit an existing post.

## Services

The `PostService` services are used to interact with the JSONPlaceholder API for fetching, creating, updating, and deleting posts.

## Routing

The application uses Angular's routing to navigate between different views. The routes are defined in the `app-routing.module.ts` file.
