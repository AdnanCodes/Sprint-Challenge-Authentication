- [ ] What is the purpose of using _sessions_?
      -Sessions are processes that allow server to store information for a client. Such processes can store information, perform authentication, persist data across requests from client so the client is up-to-date

- [ ] What does bcrypt do to help us store passwords in a secure manner.
      Bcrypt allows to hash the passwords to certain amount which makes it difficult to crack the password using Brute Force Attack Mitigation

- [ ] What does bcrypt do to slow down attackers?
      Bcrypt not only hash the password but adds time to hashing algorithm and creates Key Derivation Function, which makes extremely lengthy to crack a hash but at expense of longer time needed for server to hash the password.

- [ ] What are the three parts of the JSON Web Token?
      The header, the payload and the signature
