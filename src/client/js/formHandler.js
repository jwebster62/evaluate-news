const myKey = "a61e1677e6deb8dba178e66a9a9ae65b"


/*function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = data.message
        })
}

export { handleSubmit }
*/
const https = require('follow-redirects').https;
const fs = require('fs');

const options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': `/sentiment-2.1?key=${myKey}&lang=<lang>&txt=<text>&model=<model>`,
    'headers': {},
    'maxRedirects': 20
};

const req = https.request(options, function(res) {
    const chunks = [];

    res.on("data", function(chunk) {
        chunks.push(chunk);
    });

    res.on("end", function(chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function(error) {
        console.error(error);
    });
});

req.end();