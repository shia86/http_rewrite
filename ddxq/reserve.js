var body = $response.body;
var obj = JSON.parse(body);

obj['data'][0]['time'][0]['times'].forEach(element => {
    element['type'] = 1
    element['fullFlag'] = false
    element['disableType'] = 0
});

body = JSON.stringify(obj);

console.log(body);

$done(body);