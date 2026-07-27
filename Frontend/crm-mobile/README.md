# CRM Mobile App - SONORA (React Native + Expo)

Este proyecto es la versión móvil (App) de la tienda de música y crm web, replicando exactamente las funcionalidades y estilos del frontend en React (`Frontend/crm-website`) pero adaptado a dispositivos móviles utilizando **React Native** con **Expo** y **Tailwind CSS** (`twrnc`).

---

## 🛠️ Tecnologías y Características

1. **Expo**: Plataforma para desarrollo y empaquetado rápido de aplicaciones móviles híbridas (Android/iOS).
2. **Tailwind CSS (`twrnc`)**: Utilidades de estilos tipo Tailwind adaptadas nativamente para componentes de React Native.
3. **Axios**: Cliente HTTP para realizar peticiones al backend REST de Django.
4. **Expo Linear Gradient**: Degradados fluidos y vistosos similares al sitio web de escritorio.
5. **Lucide React Native**: Paquete de íconos vectoriales modernos y estilizados.

---

## 🚀 Requisitos Previos

Asegúrate de tener instalado en tu sistema:
- **Node.js** (versión LTS recomendada)
- **NPM** o **Yarn**
- La aplicación **Expo Go** instalada en tu teléfono móvil (disponible gratis en Google Play Store y Apple App Store) para pruebas en tiempo real.

---

## 📦 Instalación y Configuración

1. **Navega al directorio del proyecto móvil**:
   ```bash
   cd Frontend/crm-mobile
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configuración del Servidor (Backend)**:
   Abre el archivo [config.js](file:///c:/Users/jackl/OneDrive/Documents/GitHub/Full-Stack-Sandbox/Frontend/crm-mobile/config.js) y configura la dirección IP de tu servidor backend.
   * **Emulador Android**: Usa el valor por defecto `10.0.2.2`. Android mapea esta IP directamente al `localhost` de tu computadora.
   * **Dispositivo Físico**: Cambia la constante `API_HOST` por la dirección IP privada de tu PC en la red local (ej. `192.168.1.50`). Asegúrate de que tu celular y tu computadora estén conectados a la misma red Wi-Fi.
   * **Simulador iOS o Web**: Puedes usar `127.0.0.1`.

---

## 🖥️ Cómo Correr el Proyecto en Desarrollo

1. **Inicia el servidor de desarrollo de Expo**:
   ```bash
   npm run start
   # o bien:
   npx expo start
   ```

2. **Probar en tu celular (Físico)**:
   - Abre la cámara de tu celular o la app de Expo Go y escanea el código QR que se muestra en la terminal.
   
3. **Probar en Emuladores**:
   - Presiona `a` para abrir en el emulador de Android.
   - Presiona `i` para abrir en el simulador de iOS (requiere Mac).
   - Presiona `w` para abrir en el navegador web.

---

## 🏗️ Cómo Generar el archivo APK para Android

Para generar un archivo de instalación APK para dispositivos Android, tienes dos alternativas principales:

### Método 1: Usando Expo Application Services (EAS Build) - Recomendado (No requiere Android Studio)

Expo provee EAS para compilar la aplicación en la nube de forma totalmente gratuita y automática, entregándote un enlace de descarga directo o un archivo APK.

1. **Instala EAS CLI globalmente**:
   ```bash
   npm install -g eas-cli
   ```

2. **Inicia sesión en tu cuenta de Expo**:
   ```bash
   eas login
   ```
   *(Si no tienes una cuenta de Expo, regístrate de forma gratuita en [expo.dev](https://expo.dev))*

3. **Inicializa el proyecto de EAS**:
   ```bash
   eas project:init
   ```

4. **Configura el perfil de build**:
   Crea o verifica el archivo `eas.json` en la raíz de `crm-mobile` con la configuración para generar un APK (por defecto EAS compila un `.aab` para Google Play, pero un perfil `preview` te permite generar un `.apk` instalable):
   ```json
   {
     "cli": {
       "version": ">= 9.0.0"
     },
     "build": {
       "development": {
         "developmentClient": true,
         "distribution": "internal"
       },
       "preview": {
         "distribution": "internal",
         "android": {
           "buildType": "apk"
         }
       },
       "production": {}
     }
   }
   ```

5. **Compila para generar el APK**:
   Corre el comando para compilar en la nube bajo el perfil `preview`:
   ```bash
   eas build -p android --profile preview
   ```
   Una vez termine el proceso en la nube, EAS te proveerá un código QR y un enlace para descargar e instalar el archivo APK directamente en tu celular Android.

---

### Método 2: Compilación Local (Requiere Android Studio y Java SDK)

Si prefieres compilar la aplicación localmente en tu propia máquina:

1. **Genera los directorios nativos (Prebuild)**:
   ```bash
   npx expo prebuild
   ```

2. **Compila la versión nativa de desarrollo/producción**:
   ```bash
   npx expo run:android --variant release
   ```
   El APK generado de manera local se guardará dentro de la carpeta:
   `android/app/build/outputs/apk/release/app-release.apk`
