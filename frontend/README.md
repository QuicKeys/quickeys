# Quickeys Frontend

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/en/main)
[![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/docs/intro)
[![Vitest](https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Framer Motion](https://img.shields.io/badge/framer_motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)

## Table of Contents
- [Tech Stack](#tech-stack)
    - [JavaScript Frameworks and Libraries](#javascript-frameworks-and-libraries)
    - [Build Tools](#build-tools)
    - [CSS Frameworks and Utilities](#css-framework-and-utilities)
    - [Animation Libraries](#animation-libraries)
    - [Graphics and 3D Libraries](#graphics-and-3d-libraries)
- [Tools Used](#tools-used)
- [Setup Guide](#setup-guide)
    - [Requirements](#requirements)
    - [Development Environment/Server Setup](#development-environmentserver-setup)

## Tech Stack

### JavaScript Frameworks and Libraries:
- [**React**](https://react.dev/): Free and open-source frontend JavaScript library
- [**React Router**](https://reactrouter.com/en/main): JavaScript framework that enables client side routing
- [**Axios**](https://axios-http.com/docs/intro): Promise-based HTTP Client for Node.js

### Build Tools:
- [**Node.js**](https://nodejs.org/en): Free, open-source, cross-platform JavaScript runtime environment
- [**Vite**](https://vitejs.dev/): Local development server
- [**Vitest**](https://vitest.dev/): Testing framework

### CSS Framework and Utilities:
- [**Tailwind CSS**](https://tailwindcss.com/): Open-source CSS framework

### Animation Libraries:
- [**Framer Motion**](https://www.framer.com/motion/): Motion library for React

### Graphics and 3D Libraries:
- [**Three.js**](https://threejs.org/): Cross-browser JavaScript 3D library

## Tools Used
- [**Visual Studio Code**](https://code.visualstudio.com/): Code editor
- [**Git**](https://git-scm.com/): Free and open-source version control system
- [**GitHub**](https://github.com): Online developer platform used to collaborate on software projects


## Setup Guide

### Requirements
1. **Node.js**: Setting up the project requires npm (Node Package Manager), which comes with a Node.js installation. Download Node.js [here](https://nodejs.org/en/download).

### Development Environment/Server Setup

1. **Clone the repository**
```bash
git clone https://github.com/QuicKeys/quickeys.git
```

2. **Install dependencies for admin and client interfaces**
```bash
cd frontend
```
```bash
cd admin
```
```bash
# frontend/admin

npm install
```
```bash
cd ..
```
```bash
cd client
```
```bash
# frontend/client

npm install
```

3. **Run the local development server**

For `admin`:
```bash
# frontend/admin

npm run dev
```

For `client`:
```bash
# frontend/client

npm run dev
```

You can access the server at `http://localhost:5173/`