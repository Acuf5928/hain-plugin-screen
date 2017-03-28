'use strict';

const os = require('os');
const spawn = require('child_process').execFile;

module.exports = (pluginContext) => {
    const shell = pluginContext.shell;

    function search(query, res) {
		
        res.add({
            payload: 'SpegniSchermo',
            title: 'Monitor OFF'
        });
		
    }
	

    function execute(id, payload) {
        if (payload == 'SpegniSchermo') {
            var child = spawn('cmd', ['/c','start cmd /k', 'C:\\nircmd.exe monitor off'],  {
       		detached: true,
       		stdio: 'ignore',
       		cwd: os.homedir()
      		});
		 }
    }

    return {search, execute};
}   ;