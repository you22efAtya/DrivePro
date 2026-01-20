# DrivePro – Driving Training Management System

## 📌 Overview

DrivePro is a full-stack web application developed for a driving training company to manage training reservations and administrative operations efficiently. The project covers the complete software development lifecycle, starting from UI/UX design to deployment-ready backend architecture.

The system provides an intuitive experience for trainees to reserve driving sessions, while offering a powerful admin dashboard for managing users, roles, and reservations.

---

## 🎯 Key Features

### 👤 User Features

* Reserve driving training sessions online
* Receive real-time and email notifications for reservation status (approval/rejection)
* Arabic language support for better accessibility

### 🛠️ Admin Features

* Manage trainees, administrators, and reservations
* Role-Based Access Control (RBAC)
* Real-time notifications using SignalR
* Secure and structured admin dashboard

---

## 🧱 Architecture & Design

* **UI/UX Design:** Designed using **Figma** before implementation
* **Backend Architecture:** ASP.NET Core using **MVC** and **N-Tier Architecture**
* **Design Patterns:**

  * Repository Pattern
  * Unit of Work
  * Dependency Injection

---

## 🧰 Tech Stack

### Frontend

* HTML, CSS, JavaScript
* Razor Views (MVC)

### Backend

* ASP.NET Core
* MVC Pattern
* SignalR (Real-time notifications)

### Database

* SQL Server
* Entity Framework Core (EF Core)

### Security & Performance

* Role-Based Access Control (RBAC)
* Rate Limiting

### Localization

* Arabic Localization Support

---

## 📧 Notifications

* **SignalR:** Real-time in-app notifications
* **Email Service:** Automated emails for reservation approval or rejection

---

## 🚀 Getting Started

### Prerequisites

* .NET SDK
* SQL Server
* Visual Studio / VS Code

### Setup Steps

1. Clone the repository
2. Configure the database connection string
3. Apply migrations using EF Core
4. Run the application

---

## 📂 Project Structure (High Level)

```
DrivePro
│── DrivePro.Web
│── DrivePro.Application
│── DrivePro.Domain
│── DrivePro.Infrastructure
│── README.md
```

---

## 📈 Future Enhancements

* Online payment integration
* Mobile-friendly UI
* Reporting & analytics dashboard

---

## 👨‍💻 Author

**Youssef Mohammed**

---

## 📜 License

This project is for educational and demonstration purposes.
