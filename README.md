# FoddieExplorer
# 🍽️ Foodie Explorer

A full-stack web application that helps food enthusiasts discover and explore culinary destinations across different locations. Built with React.js frontend and Node.js/Express backend with MongoDB database.

## 📸 Screenshots

### Home Page
![Home Page](./screenshots/home-page.png)
*The landing page with navigation and food exploration theme*

### User Dashboard
![User Dashboard](./screenshots/user-dashboard.png)
*User interface with sidebar navigation and search functionality*

### Admin Panel
![Admin Panel](./screenshots/admin-panel.png)
*Admin dashboard for managing places, users, and content*

### Search Results
![Search Results](./screenshots/search-results.png)
*Search functionality displaying food items and locations*

## ✨ Features

### For Users
- 🔐 **User Authentication** - Secure sign up and sign in
- 🔍 **Smart Search** - Search by food items or locations
- 📍 **Location Discovery** - Explore food places with ratings
- 👤 **User Profile** - Personalized dashboard experience
- 📝 **Explorer Registration** - Apply to become a food explorer
- 💬 **Real-time Messages** - Receive updates from administrators
- 📱 **Responsive Design** - Works on all devices

### For Administrators
- 🏢 **Admin Dashboard** - Comprehensive management interface
- ➕ **Add Places** - Add new food destinations with images
- 👥 **User Management** - View and manage registered users
- 🚫 **User Deactivation** - Remove users when necessary
- 📋 **Explorer Applications** - Review food explorer registrations
- 📢 **Broadcast Messages** - Send announcements to all users
- 📊 **Content Gallery** - Manage cuisine gallery

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based UI library
- **React Router** - Client-side routing
- **CSS3** - Custom styling with responsive design
- **Font Awesome** - Icons and visual elements

### Backend
- **Node.js** - Server runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Additional Tools
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/foodie-explorer.git
   cd foodie-explorer
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the server directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/foodie-explorer
   # or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/foodie-explorer
   PORT=3000
   ```

5. **Start the Development Servers**
   
   **Backend Server** (from server directory):
   ```bash
   npm start
   # or for development with nodemon:
   npm run dev
   ```
   
   **Frontend Server** (from client directory):
   ```bash
   npm start
   ```

6. **Access the Application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:3000/api`

## 📱 Usage

### For Regular Users

1. **Registration & Login**
   - Visit the homepage and click "Sign Up"
   - Create an account with username and password
   - Sign in to access the user dashboard

2. **Exploring Food Places**
   - Use the search bar to find food items or locations
   - Browse the results with images, ratings, and details
   - View place information including location and food specialties

3. **Becoming an Explorer**
   - Navigate to "Become Explorer" from the sidebar
   - Fill out the registration form with your details
   - Explain why you want to be a food explorer

### For Administrators

1. **Admin Access**
   - Navigate to the "Explore" page (Admin Login)
   - Use admin credentials to access the admin panel

2. **Managing Content**
   - **Add Places**: Upload new food destinations with images and ratings
   - **View Users**: Monitor registered users and their activities
   - **Manage Explorers**: Review and approve explorer applications
   - **Send Messages**: Broadcast announcements to all users

## 🗂️ Project Structure

```
foodie-explorer/
├── client/                          # Frontend React application
│   ├── public/                      # Public assets
│   ├── src/
│   │   ├── components/              # Reusable components
│   │   │   ├── Admin/               # Admin-specific components
│   │   │   │   ├── AddPlaces.jsx
│   │   │   │   ├── Admin_Home.jsx
│   │   │   │   ├── CollectRegistrations.jsx
│   │   │   │   ├── DeactivateUser.jsx
│   │   │   │   ├── SendMessage.jsx
│   │   │   │   ├── SidebarNav.jsx
│   │   │   │   ├── UsersList.jsx
│   │   │   │   └── sheetcss1/       # Admin component styles
│   │   │   ├── User/                # User-specific components
│   │   │   │   ├── Contact.jsx
│   │   │   │   ├── ReceiveMsg.jsx
│   │   │   │   ├── SearchBar.jsx
│   │   │   │   ├── SideBar.jsx
│   │   │   │   ├── UserRegister.jsx
│   │   │   │   └── userStyles/      # User component styles
│   │   │   └── NavBar.jsx           # Main navigation
│   │   ├── pages/                   # Page components
│   │   │   ├── About.jsx
│   │   │   ├── Explore.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── UserLogin.jsx
│   │   │   └── styles/              # Page-specific styles
│   │   ├── assets/                  # Images and static files
│   │   └── App.jsx                  # Main app component
├── server/                          # Backend Node.js application
│   ├── db/
│   │   └── index.js                 # Database models and connection
│   ├── routes/                      # API routes
│   │   ├── admin.js                 # Admin authentication routes
│   │   ├── addplaces.js             # Place management routes
│   │   ├── deactivateUser.js        # User deactivation routes
│   │   ├── message.js               # Message broadcasting routes
│   │   ├── registrations.js         # Explorer registration routes
│   │   └── user.js                  # User authentication routes
│   ├── index.js                     # Server entry point
│   └── package.json
└── README.md
```

## 🎨 UI/UX Improvements Suggestions

### Current Design Analysis
Your application has a solid foundation, but here are some recommendations to enhance the user experience:

### 🎯 Immediate Improvements

1. **Color Scheme Consistency**
   - Implement a consistent color palette across all components
   - Consider using CSS custom properties (variables) for better maintainability

2. **Typography Enhancement**
   - Use a modern font stack (Google Fonts like Inter, Roboto, or Poppins)
   - Establish consistent font sizes and weights hierarchy

3. **Spacing & Layout**
   - Implement consistent spacing using a scale (8px, 16px, 24px, 32px)
   - Use CSS Grid and Flexbox more effectively for layouts

4. **Interactive Elements**
   - Add hover states and transitions to buttons and links
   - Implement loading states for async operations
   - Add form validation feedback with better visual cues

### 🔧 Component-Specific Enhancements

#### Search Bar
```css
/* Improved search bar styling */
.search-container {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 600px;
  margin: 0 auto;
}

.search-input {
  flex: 1;
  padding: 16px 24px;
  border: none;
  outline: none;
  font-size: 16px;
}

.search-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 16px 32px;
  cursor: pointer;
  transition: all 0.3s ease;
}
```

#### Cards Design
```css
/* Modern card styling */
.food-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.food-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.food-card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.food-card-content {
  padding: 20px;
}
```

### 📱 Mobile Responsiveness
- Implement proper breakpoints for tablet and mobile devices
- Ensure touch-friendly button sizes (minimum 44px)
- Optimize navigation for mobile (hamburger menu)

### 🎭 Visual Enhancements
- Add subtle animations and micro-interactions
- Implement a proper loading skeleton for data fetching
- Use better placeholder images or implement lazy loading
- Add success/error toast notifications

## 🔌 API Endpoints

### Authentication
- `POST /user/sign_up` - User registration
- `POST /user/sign_in` - User login
- `POST /admin/admin_details` - Admin login

### Places Management
- `POST /addplaces/add_places` - Add new place (Admin)
- `GET /addplaces/admin_Home_cusines` - Get all cuisines (Admin)
- `GET /addplaces/user_cusines?q={query}` - Search places/food items

### User Management
- `GET /user/users_list` - Get all users (Admin)
- `DELETE /deactivateUser/deactivate_user/:id` - Deactivate user (Admin)

### Registrations
- `POST /registrations/user_register` - Submit explorer application
- `GET /registrations/collect_registrations` - Get all applications (Admin)

### Messaging
- `POST /message/send_message` - Send message to all users (Admin)
- `GET /message/latest_message` - Get latest message

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**N Tarun**
- Email: tarun@gmail.com
- GitHub: [@Tarun7386](https://github.com/Tarun7386/)
- LinkedIn: [Tarun Nellikuduru](https://www.linkedin.com/in/tarun-nellikuduru-434214272/)
- Location: Hyderabad, Telangana

## 🙏 Acknowledgments

- Food images and inspiration from various culinary sources
- Icons provided by Font Awesome
- MongoDB for database solutions
- React community for excellent documentation and support

---

<div align="center">
  <p>Made with ❤️ for food lovers everywhere</p>
  <p>© 2024 All rights reserved by N Tarun</p>
</div>
