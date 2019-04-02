// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process


window.ipcRenderer.on('memory-info', callGetProcessMemoryInfo);

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
