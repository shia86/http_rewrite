var body = $response.body
var resp = JSON.parse(body)
try {
    resp['Result']['isLifelong'] = 1
    resp['Result']['vipType'] = 1
    resp['Result']['expiresTime'] = 2055649382000
} catch (error) {
    console.log(error)
}
$done(JSON.stringify(resp))
