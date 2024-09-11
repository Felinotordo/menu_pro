const express = require('express');
const app = express();
var cors = require('cors')
const routes =require('./app/routes/routes')

app.use(cors())

app.set('port', process.env.PORT || 3000)

app.use(routes);

app.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`);
});
