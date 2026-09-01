PackFlow ERP - Electron & Sync Scaffold

This scaffold adds a simple sync server (Express + Socket.IO) and an Electron launcher to wrap the existing `index.html`.

Quick start (development):

1. Install dependencies:

```powershell
npm install
```

2. Run the static server and sync server in separate terminals:

```powershell
# Terminal 1
npm run start

# Terminal 2
npm run start:sync
```

3. Start the Electron app (after servers are running):

```powershell
npm run start:electron
```

Build Windows installer (requires proper code signing setup for production):

```powershell
npm run dist:win
```

Notes:
- The sync server listens on port `4000` by default and broadcasts `sync:update` events to connected clients.
- The front-end (`index.html`) includes a small client script that connects to `http://localhost:4000` and will call local handlers such as `window.appState.applyRemoteUpdate(payload)` or `window.app.refreshAllTables()` when updates arrive.
- For mobile APK packaging, we will scaffold Capacitor next (requires Android SDK). If you'd like, I can add a GitHub Actions workflow to build `.exe` and `.apk` artifacts.