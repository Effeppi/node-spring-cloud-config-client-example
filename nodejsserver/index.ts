import express from 'express'
import {PropertySourcesContext} from 'node-spring-cloud-config-client' 

var app = express();

PropertySourcesContext.getInstance().loadProperties$()
.subscribe(() => {
    const port = process.env['SERVER_PORT'];
    app.listen(port, function () {
        console.log(`Example app listening on port ${port}!`);
      });
  
})


app.get('/', function (req, res) {
  res.send('Hello World!');
});
