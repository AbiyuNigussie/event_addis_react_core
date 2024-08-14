# Event Addis

**Event Addis** is a web application built with .NET Core and React, designed to manage and list events and conference meetings. It provides users with an easy way to browse, register, and manage event details, offering a seamless experience for both event organizers and attendees.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Event Listings:** View a comprehensive list of upcoming events and conferences.
- **Event Details:** Get detailed information about each event, including date, time, venue, and description.
- **User Registration:** Register for events and manage your reservations.
- **Admin Panel:** Admins can add, edit, and delete events, as well as manage user registrations.
- **Search & Filter:** Easily search for events by keywords, date, and category.
- **Responsive Design:** Fully responsive design for optimal viewing on any device.

## Tech Stack

- **Frontend:**

  - React
  - React Router
  - Axios
  - Tailwind CSS

- **Backend:**

  - .NET Core
  - Entity Framework Core
  - SQL Server

- **Development Tools:**
  - Visual Studio / Visual Studio Code
  - Postman (for API testing)
  - Git

## Installation

### Prerequisites

- [.NET Core SDK](https://dotnet.microsoft.com/download)
- [Node.js & npm](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/event_addis_react_core.git
   cd event_addis_react_core

   ```

2. Navigate to the backend project directory:

   ```bash
   cd event_addis_react_core.Server
   ```

3. Restore the .Net Core Packages:

   ```bash
   dotnet restore

   ```

4. Update the connection string in 'appsettings.json' to point to your SQL Server instance.

5. Apply database migrations:

   ```bash
   dotnet ef database update
   ```

### Frontend Setup

1. Navigate to the frontend project directory:

   ```bash
   cd event_addis_react_core.Client
   ```

2. install the required npm packages:

   ```bash
   npm install
   ```

### Usage

1. Navigate to the backend project directory:

   ```bash
   cd event_addis_react_core.Server
   ```

2. Run the backend and frontend server simultaneuosly.

   ```bash
   dotnet run
   ```

3. Open your browser and navigate to http://localhost:5173 to access the application.

4. Explore the event listings, register for events, and manage your profile.

5. Admin users can log in to access the admin panel and manage events.

## API Documentation

API endpoints are available for interacting with the event data. You can access the API documentation by navigating to /swagger on the backend server:

```bash
http://localhost:7194/swagger
```

## Contribution

Contribution are welcome! Please follow these steps:

1. Fork the repository.

2. Create a new branch (`git checkout -b feature-branch`).

3. Commit your changes (`git commit -m 'Add new feature'`).

4. Push to the branch (`git push origin feature-branch`).

5. Open a pull request.

## Contact

For any inquiries or issues, please reach out to:

Abiyu Nigussie - Fullstack Developer
<br><a href="abiyunigussie7@gmail.com">Email</a> | <a href="">Linkden</a>
