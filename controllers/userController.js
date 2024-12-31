
const validData = {
    username: 'user1',
    password: 'password123',
  };
  
  exports.getHey = (req, res) => {
    res.status(200).json({ message: 'Hey, how are you?' });
  };
  
  exports.getHello = (req, res) => {
    res.status(200).json({ message: 'Hello, welcome!' });
  };
  
  exports.getHi = (req, res) => {
    res.status(200).json({ message: 'Hi, good to see you!' });
  };
  
  exports.getHai = (req, res) => {
    res.status(200).json({ message: 'Hai, have a great day!' });
  };
  
  exports.verifyData = (req, res) => {
    const { username, password } = req.body;
  
    if (username === validData.username && password === validData.password) {
      res.status(200).json({ message: 'Verification successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  };
  
  exports.authenticate = (req, res) => {
    const { username, password } = req.body;
  
    if (username === validData.username && password === validData.password) {
      res.status(200).json({ message: 'Authenticated successfully' });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  };
  