var body = $request.body;
var params = new URLSearchParams(body);
var modifiedBody = body;

if (params.has('current_page')) {
    params.set('learn_time', '60');
    params.set('current_time', '60');
    modifiedBody = params.toString();
}

$done({body : modifiedBody});
