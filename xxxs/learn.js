var body = $response.body
var resp = JSON.parse(body)
var data = resp['data']
if (data && data['length']) {
    data['learn_time'] = data['length'] - 3
    data['current_time'] = data['length'] -3
}
$done(JSON.stringify(resp))
