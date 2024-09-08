var body = $response.body
var resp = JSON.parse(body)
var data = resp['data']
if (data && data['type'] == 'video') {
    data['learn_time'] = data['length']
}
$done({'resp': JSON.stringify(resp)})