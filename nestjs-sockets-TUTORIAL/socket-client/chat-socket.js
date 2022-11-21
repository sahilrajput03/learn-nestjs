const socket = io("http://localhost:3000")

console.log('version?', io.version)

// WORKS GOOD FOR SLASHER APP:
// 1. Useful for providing explicity transports type as "websocket" instead of hybrid upgrading model
// 2. Useful for providing authorizatio headers for authentication
// const socket = io("http://localhost:4000", {
// 	transports: ["websocket"],
// 	extraHeaders: {
// 	"authorization": "Bearer TOKEN_HERE"
// 	}
// })

socket.on("connect", () => {
  console.log(`CONNECTION SUCCESSFUL: socket.id: ${socket.id}, socket.connected: ${socket.connected}`) // example socket.id=x8WIv7-mJelg7on_ALbx
	// socket.emit('chatTest', {senderId: 'sndid' , receiverId: 'rcvd', message: 'mssg'})
});

const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSubmitNewMessage = () => {
  // @ts-ignore
  socket.emit('message', { data: message?.value })
}

socket.on('message', ({ data }) => {
  handleNewMessage(data);
})

const handleNewMessage = (message) => {
  messages?.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message))
  return li;
}
