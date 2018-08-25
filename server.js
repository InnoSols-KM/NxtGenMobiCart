var express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

var app = express()
var cf_app = require('./app/vcap_application')
var cf_svc = require('./app/vcap_services')

const api = require('./server/api');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', api);

app.get('/', function(req, res) {
    res.render('pages/index', {
        app_environment: app.settings.env,
        application_name: cf_app.get_app_name(),
        app_uris: cf_app.get_app_uris(),
        app_space_name: cf_app.get_app_space(),
        app_index: cf_app.get_app_index(),
        app_mem_limits: cf_app.get_app_mem_limits(),
        app_disk_limits: cf_app.get_app_disk_limits(),
        service_label: cf_svc.get_service_label(),
        service_name: cf_svc.get_service_name(),
        service_plan: cf_svc.get_service_plan()
    })
})

app.listen(process.env.PORT || 4000);

const server = http.createServer(app);

server.listen(port, () => {
    console.log('app running');
});