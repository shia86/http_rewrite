var body = $response.body
var resp = JSON.parse(body)
var data = resp['data']
if (data && data['length']) {
    data['learn_time'] = data['length']
    data['current_time'] = data['length']
}
$done(JSON.stringify(resp))
