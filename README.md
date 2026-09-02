# 🚀 Modern User Management System

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000f?style=for-the-badge&logo=mysql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer [Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### 📝 Description
**User Management System** is a complete full-stack application that implements a user management system with a high-level SaaS-style interface. Built with **Spring Boot 3** for a robust backend and **React + TypeScript** for a fluid frontend. Includes PDF/Excel export, modern animations, and persistent authentication.

---

## 🎨 Main Features
- **Auth Experience:** Login with a *Split Screen* design (half form, half visual design).

- **Complete System:** Full user management (Create, Read, Update, Delete).

- **Premium UI/UX:** Shadcn-inspired aesthetics with rounded edges and glass effects (Glassmorphism). - **Reports:** One-click generation of **PDF** and **Excel** files.

- **Interactions:** Smooth entry and exit animations using **Framer Motion**.

- **Persistence:** Administrator session saved to `LocalStorage`.

---

## 🛠️ Technologies Used

### Frontend (Folder: `/frontend`)
- **React 18** & **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Iconography)
- **jsPDF** & **XLSX** (Export)

### Backend (Folder: `/backend`)
- **Java 21** & **Spring Boot 3**
- **Spring Data JPA**
- **MySQL Driver**
- **Maven**

---

## 🌐 CORS Configuration (Important)

If you download this project, you must ensure that the Frontend has permission to communicate with the Backend. In the `UserController.java` file, check the following line:

```java
@CrossOrigin(origins = "http://localhost:5173") // <-- Change this port if your React uses a different one
@RestController
@RequestMapping("/user")
public class UserController { ... }
