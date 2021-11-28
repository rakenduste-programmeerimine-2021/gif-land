const express = require('express');
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOrigin = 'http://localhost:3000';
app.use(cors({
  origin:[corsOrigin],
  methods:['GET','POST'],
  credentials: true 
})); 

app.post('/image-upload', imageUpload.array('Pic'), (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  } else {
    console.log('POST request received to /upload.');
    console.log('Axios POST body: ', req.body);
    res.send('POST request recieved on server to /upload.');
  }

  const file = req.files.file;

  file.mv(`${__dirname}/image_uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/image_uploads/${file.name}` });
  });
});

const port = 5000;
app.listen(port, process.env.IP, function(){
  console.log(`Server is running on port ${port}`);
});