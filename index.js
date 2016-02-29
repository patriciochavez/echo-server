var net = require('net');
var os=require('os');

var server = net.createServer(function(socket) {
        socket.write('echo-server#2\r\n');
        socket.pipe(socket);
});

var port = 1234;
var ifaces=os.networkInterfaces();
for (var dev in ifaces) {
  var alias=0;
  ifaces[dev].forEach(function(details){
    if (details.family=='IPv4') {
	if ((dev+(alias?':'+alias:'')) == 'eth0'){
		ipAddress = details.address;
      		++alias;
	}
    }
  });
}

server.listen(port, '0.0.0.0');
console.log("Echo-server escuchando en " + ipAddress + ":" + port);

