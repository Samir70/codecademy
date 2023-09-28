# Transport Layer Security (TLS)

The details of the handshake differ depending on the encryption and key exchange algorithms supported by the client and the server. In general, the process works like this:

  - Client sends a “hello” message to the server, containing their supported protocol versions, cipher suites, and a random string of data called the client random.
  - The server responds with its TLS/SSL certificate, the cipher suite it has chosen, and another random string of data called the server random.
  - The client uses the server’s TLS/SSL certificate to authenticate the server.
  - The client and the server exchange a piece of information called a premaster secret. The details of this exchange vary depending on the key exchange algorithm, but the result is that both the client and the server end up with the same premaster secret. The client and the server use the premaster secret, client random, and server random to generate session keys.
  - The client and server send each other messages encrypted using the session keys to test the connection.
  - If everything worked correctly, an encrypted connection has been established.
