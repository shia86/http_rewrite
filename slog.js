var body = $response.body
var resp = JSON.parse(body)
body['user_roles'][0] = "platinum"
body['expiration] = 2055649382000
$done(JSON.stringify(resp))
