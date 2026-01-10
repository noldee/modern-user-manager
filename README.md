# 🚀 Modern User Management System

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000f?style=for-the-badge&logo=mysql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### 📝 Descripción
**User Management System** es una aplicación Full-Stack completa que implementa un Sistema de usuarios con una interfaz tipo SaaS de alto nivel. Construida con **Spring Boot 3** para un backend robusto y **React + TypeScript** para un frontend fluido. Incluye exportación a PDF/Excel, animaciones modernas y autenticación persistente.

---

## 🎨 Características principales
- **Auth Experience:** Login con diseño *Split Screen* (mitad formulario, mitad diseño visual).
- **Sisemta Completo:** Gestión total de usuarios (Crear, Leer, Actualizar, Eliminar).
- **UI/UX Premium:** Estética inspirada en Shadcn, con bordes redondeados y efectos de cristal (Glassmorphism).
- **Reportes:** Generación de archivos **PDF** y **Excel** con un solo clic.
- **Interacciones:** Animaciones suaves de entrada y salida mediante **Framer Motion**.
- **Persistencia:** Sesión de administrador guardada en `LocalStorage`.

---

## 🛠️ Tecnologías utilizadas

### Frontend (Folder: `/frontend`)
- **React 18** & **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Iconografía)
- **jsPDF** & **XLSX** (Exportación)

### Backend (Folder: `/backend`)
- **Java 21** & **Spring Boot 3**
- **Spring Data JPA**
- **MySQL Driver**
- **Maven**

---

## 🌐 Configuración de CORS (Importante)

Si descargas este proyecto, debes asegurarte de que el Frontend tenga permiso para hablar con el Backend. En el archivo `UserController.java`, verifica la siguiente línea:

```java
@CrossOrigin(origins = "http://localhost:5173") // <-- Cambia este puerto si tu React usa otro
@RestController
@RequestMapping("/user")
public class UserController { ... }