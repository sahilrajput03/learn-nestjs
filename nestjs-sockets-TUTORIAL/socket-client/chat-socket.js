const socket = io("http://localhost:3000")

// notify on successful connection:
socket.on('connect', () => {
	console.log('connection successful')
})

const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSubmitNewMessage = () => {
  socket.emit('message', { data: message.value })
}

socket.on('message', ({ data }) => {
	console.log(data)
  handleNewMessage(data);
})

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message))
  return li;
}
