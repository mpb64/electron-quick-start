const { ipcRenderer } = require('electron');
window.ipcRenderer = ipcRenderer;
window.process = process;
