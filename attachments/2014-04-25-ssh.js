# $language = "JScript"
# $interface = "1.0"

;(function(undefined) {

	// Configuration start
	var SERVER_INFO = {
		'PASSWORD' : { // fill by yourself
			'vm'   : 'pass4appstore',
			'team' : 'dev@web'
		},
		'DEFAULT_DIR' : {
			'vm'   : '/data/vm_pre_deploy/',
			'team' : '/home/www/'
		}
	};
	// Configuration end


	// check if it's connected
	if (crt.session.Connected) {
		crt.Screen.WaitForString (">");

		// get server id
		var serverType = 'vm', // default
			serverId = crt.Dialog.Prompt("Enter the IDC server id", "Connect");

		// get server ip by its id
		var serverIp = "";
		switch (serverId) {
		// team
		case "150":
			serverType = 'team';
			serverIp = "172.27.9.150";
			break;

		// vm
		case "169":
			serverIp = "172.25.75.169";
			break;
		case "84":
			serverIp = "172.23.136.84";
			break;
		case "86":
			serverIp = "172.23.136.86";
			break;
		case "97":
			serverIp = "172.23.136.97";
			break;
		case "100":
			serverIp = "172.23.136.100";
			break;
		default:
			crt.Dialog.MessageBox("The specified server doesn't exist!");
			return;
		}

		// ssh
		crt.Screen.Send("ssh -o StrictHostKeyChecking=no -p 36000 -l root " + serverIp + "\r");

		// send password
		crt.Screen.WaitForString (":");
		if ('' === SERVER_INFO.PASSWORD[serverType]) {
			SERVER_INFO.PASSWORD[serverType] = crt.Dialog.Prompt("Enter password please", "Connect"); // password prompt
		}
		crt.Screen.Send(SERVER_INFO.PASSWORD[serverType] + "\r");

		// show current ip on the tab 
		crt.Screen.WaitForString ("#");
		crt.Screen.Send("echo -ne \"\\e]2;IDC: " + serverIp + "\\a\"\r");

		// enter the default dir
		crt.Screen.WaitForString ("#");
		crt.Screen.Send("cd " + SERVER_INFO.DEFAULT_DIR[serverType] + "\r");

		// list
		crt.Screen.Send("ls\r");
	} else {
		crt.Dialog.MessageBox("Please logon to a MNET server first!");
	}

})();