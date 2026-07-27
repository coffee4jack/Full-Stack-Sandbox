# Full-Stack-Sandbox
This is a full stack project for learning.

Backend: Django
Frontend: React (Web) & React Native (Mobile App)

## Getting Started

```bash
# Backend
cd Backend
venv\Scripts\activate
python djbackend/manage.py runserver

# Frontend (Web)
cd Frontend/crm-website
npm run dev

# Frontend (Mobile App - React Native / Expo)
cd Frontend/crm-mobile
npm install
npx expo start
```

## Project Structure

```
Full-Stack-Sandbox/
├── Backend/
│   ├── djbackend/
│   │   ├── api/          # Endpoints para productos y usuarios
│   │   ├── manage.py
│   ├── requirements.txt
├── Frontend/
│   ├── crm-website/     # Frontend Web en React (Vite + Tailwind CSS)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── App.jsx
│   ├── crm-mobile/      # Aplicación Móvil en React Native (Expo + twrnc)
│   │   ├── components/
│   │   │   ├── Card.js
│   │   │   ├── Menu.js
│   │   │   ├── Background.js
│   │   ├── App.js
│   │   ├── config.js
│   │   ├── README.md    # Instrucciones específicas para compilar APK y correr la app
└── README.md
```
