window.ipcRenderer.on('memory-info', callGetProcessMemoryInfo);

/**
 * Test function that attempts to call process.getProcessMemoryInfo()
 * The available functions on the process api and the error thrown when calling getProcessMemoryInfo are shown on the window.
 */
async function callGetProcessMemoryInfo() {
    let process_func_list = "";
    for (var key in window.process) {
        if (typeof window.process[key] === 'function') {
            process_func_list = process_func_list += `${key}, `;
        }
    }
    document.getElementById('process-functions').appendChild(document.createTextNode(process_func_list))
    let memoryUsage;
    try {
        memoryUsage = await window.process.getProcessMemoryInfo();
        console.log('memory usage', memoryUsage);
    } catch(e) {
        console.log('error', e);
        document.getElementById('error').appendChild(document.createTextNode(e))
    }

}
