# EV Dealer Management System - Frontend

A modern React-based frontend for the Electric Vehicle Dealer Management System, featuring an admin panel for account creation and management.

## Features

### Admin Panel
- **Account Creation**: Create new accounts for Dealer Staff, Dealer Manager, and EVM Staff
  - MSNV (Employee ID) as primary key
  - Auto-generated email based on MSNV
  - Phone number input
  - Auto-generated initial password with copy functionality
  - Role-based account creation

- **Account Management**: Full CRUD operations for user accounts
  - View all accounts in a responsive table
  - Search and filter functionality
  - Edit account details
  - Delete accounts with confirmation
  - Status management (active/inactive)

## Technology Stack

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client for API calls

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd EV_Dealer_Management_FE
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── AdminDashboard.js      # Main admin dashboard
│   ├── AccountCreation.js     # Account creation form
│   └── AccountManagement.js   # Account management table
├── App.js                     # Main app component
├── App.css                    # App styles
├── index.js                   # Entry point
└── index.css                  # Global styles with Tailwind
```

## Key Components

### AdminDashboard
The main dashboard component that provides navigation between account creation and management features.

### AccountCreation
- Form for creating new user accounts
- Auto-generates email based on MSNV
- Generates secure initial passwords
- Supports different user roles
- Password visibility toggle and copy functionality

### AccountManagement
- Displays all user accounts in a responsive table
- Search functionality across MSNV, name, and email
- Role-based filtering
- CRUD operations with confirmation modals
- Status management

## User Roles

- **Dealer Staff**: Basic dealer operations
- **Dealer Manager**: Management-level dealer operations
- **EVM Staff**: Electric Vehicle Manufacturer staff
- **Admin**: System administration (this interface)

## Future Enhancements

This admin panel is part of a larger EV Dealer Management System that will include:

- Vehicle catalog management
- Sales order processing
- Customer relationship management
- Inventory tracking
- Reporting and analytics
- AI-powered demand forecasting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
