var socket = null;

document.querySelector("#register-name").onkeyup = function (e) {
    if (e.keyCode === 13) {  // enter, return
        document.querySelector("#register-submit").click();
    }
};

document.querySelector("#register-submit").onclick = function (e) {
    const name = document.querySelector("#register-name").value;
    socket = new WebSocket(`ws://192.168.2.201:8000/ws/register/${name}`);
    socket.onopen = function (e) {
        alert(`Websocket established! Register \"${name}\" successfully`);
        socket.send("Hello server");
    };
    socket.onerror = function (e) {
        alert(`[error] ${error.message}`);
    };
    socket.onmessage = function (e) {
        alert(`[message] Data received from server: ${e.data}`);
    }
    socket.onclose = function (e) {
        if (e.wasClean) {
            alert(`[close] Connection closed cleanly, code=${e.code} reason=${e.reason}`);
        } else {
            // e.g. server process killed or network down
            // event.code is usually 1006 in this case
            alert('[close] Connection died');
        }
    };
};