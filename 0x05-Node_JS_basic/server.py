# server.py
from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

# Define the address and port
host = "localhost"
port = 1245

# Get the directory of the current script
script_directory = os.path.dirname(os.path.abspath(__file__))

os.chdir(script_directory)  # Change working directory
server_address = (host, port)

# Create a server instance
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)

print(f"Server started at http://{host}:{port}")

# Start the server
httpd.serve_forever()

