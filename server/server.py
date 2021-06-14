import socket
from _thread import *
import threading

# https://docs.python.org/3/howto/sockets.html

#TODO change over to requests instead of socket

SERVER_HOST = '0.0.0.0'
SERVER_PORT = 8000

# Create socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server_socket.bind((SERVER_HOST, SERVER_PORT))
server_socket.listen(1)
print('Listening on port %s ...' % SERVER_PORT)
print(socket.gethostname())
try:
	while True:	
		# Wait for client connections
		client_connection, client_address = server_socket.accept()

		# Get the client request
		request = client_connection.recv(1024).decode()
		#request += client_connection.recv(1024).decode()
		print(request)

		# Send HTTP response
		response = 'HTTP/1.0 200 OK\n\nHello World'
		client_connection.sendall(response.encode())
		client_connection.close()
except KeyboardInterrupt:
	print('end')

# Close socket
server_socket.close()

