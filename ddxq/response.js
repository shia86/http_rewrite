var body = $response.body;
console.log(body);
var obj = JSON.parse(body);

if (obj['success'] == false) {
    obj['code'] = -3001;
    obj['tips'] = { "ts": 1861891000200, "limitMsg": "前方拥挤，请稍后再试..."};
    obj['msg'] = "";
    obj['data'] = {};
}


body = JSON.stringify(obj);
console.log(body);


$done(body);