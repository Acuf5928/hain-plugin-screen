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
		
        res.add({
            payload: 'SpegniPc',
            title: 'Shoutdown Pc'
        });
		
        res.add({
            payload: 'RiavviaPc',
            title: 'Restart Pc'
        });
		
    }
	

    function execute(id, payload) {
        if (payload == 'SpegniSchermo') {
			var child = spawn('cmd', ['/c', 'C:\\nircmd.exe monitor off'],  {
       		detached: true,
       		stdio: 'ignore',
       		cwd: os.homedir()
      		});
		 }
        
		if (payload == 'SpegniPc') {
            var child = spawn('cmd', ['/c', 'shutdown -s -t 0'],  {
       		detached: true,
       		stdio: 'ignore',
       		cwd: os.homedir()
      		});
		 }
		
        if (payload == 'RiavviaPc') {
            var child = spawn('cmd', ['/c', 'shutdown -r -t 0'],  {
       		detached: true,
       		stdio: 'ignore',
       		cwd: os.homedir()
      		});
		 }
    }

    return {search, execute};
}   ;