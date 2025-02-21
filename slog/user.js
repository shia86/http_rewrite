var body = $response.body
var resp = JSON.parse(body)
try {
    console.log(resp['user_roles'])
    resp['user_roles'][0] = "platinum"
    resp['expiration'] = 2055649382000
    var accounts = resp['account_list']
    accounts.push(accounts[4])
} catch (error) {
    console.log(error)
}
$done(JSON.stringify(resp))
