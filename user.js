var body = $response.body
var resp = JSON.parse(body)
resp['user_roles'][0] = "platinum"
resp['expiration] = 2055649382000
$done(JSON.stringify(resp))
