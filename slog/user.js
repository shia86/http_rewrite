var body = $response.body
var resp = JSON.parse(body)
try {
    resp['user_roles'][0] = "platinum"
    resp['expiration] = 2055649382000
} catch (error) {
    console.log(error)
}
$done(JSON.stringify(resp))
