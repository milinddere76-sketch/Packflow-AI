Capacitor Android Scaffold

This project includes a minimal Capacitor configuration to wrap the existing web app as an Android app.

Prerequisites (local machine):
- Node.js & npm
- Java JDK 11+
- Android SDK & Android Studio
- `adb` on PATH

Quick local steps to initialize and open Android project:

```powershell
npm install @capacitor/core @capacitor/cli --save-dev

# Initialize Capacitor (only once)
npm run cap:init

# Add Android platform
npm run cap:add:android

# Copy web assets to native project (run after any change)
npm run cap:copy

# Open Android Studio to build / sign / run
npm run cap:open:android
```

Notes:
- `capacitor.config.json` has `server.url` set to `http://10.0.2.2:3000` which maps the Android emulator to the host `localhost` for live-reload during development. If using a real device, set `server.url` to your machine IP.
- Building a release APK requires setting up signing keys in the Android project via Android Studio.
