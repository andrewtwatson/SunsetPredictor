import socket
from _thread import *
import threading

# https://docs.python.org/3/howto/sockets.html

SERVER_HOST = '0.0.0.0'
SERVER_PORT = 8000

# Create socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server_socket.bind((SERVER_HOST, SERVER_PORT))
server_socket.listen(1)
print('Listening on port %s ...' % SERVER_PORT)
print(socket.gethostname())
while True:	
	# Wait for client connections
	client_connection, client_address = server_socket.accept()

	# Get the client request
	request = client_connection.recv(1024).decode()
	print(request)

	# Send HTTP response
	response = 'HTTP/1.0 200 OK\n\nHello World'
	client_connection.sendall(response)
	client_connection.close()

# Close socket
server_socket.close()

# print_lock = threading.Lock()

# # thread function
# def threaded(c):
# 	response = "HTTP/1.0 200 OK\n\n."
# 	while True:
# 		# data received from client
# 		data = c.recv(1024)
# 		if not data:
# 			print('Bye')
			 
# 			# lock released on exit
# 			print_lock.release()
# 			break
  
# 		# send back reversed string to client
# 		c.sendall(response.encode())
# 		response += "."
  
# 	# connection closed
# 	c.close()


# def main():
# 	# Define socket host and port
# 	SERVER_HOST = '0.0.0.0'
# 	SERVER_PORT = 8000
# 	server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 	server_socket.bind((SERVER_HOST, SERVER_PORT))
# 	print("socket binded to port", SERVER_PORT)
  
# 	# put the socket into listening mode
# 	server_socket.listen(5)
# 	print("socket is listening")
  
# 	# a forever loop until client wants to exit
# 	while True:
  
# 		# establish connection with client
# 		client_connection, client_address = server_socket.accept()
  
# 		# lock acquired by client
# 		print_lock.acquire()
# 		print('Connected to :', client_address[0], ':', client_address[1])
  
# 		# Start a new thread and return its identifier
# 		start_new_thread(threaded, (client_connection,))
# 	s.close()
  
  
# if __name__ == '__main__':
# 	try:
# 		main()
# 	except KeyboardInterrupt:
# 		print('Interrupted')
# 		try:
# 			sys.exit(0)
# 		except SystemExit:
# 			os._exit(0)