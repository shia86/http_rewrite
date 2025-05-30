

let url = new URL($request.url);

let studyLength = url.searchParams.get('studyLength');

if (studyLength !== null && url.searchParams.has('studyTime')) {
  url.searchParams.set('studyTime', studyLength);
}

let modifiedPath = url.pathname + '?' + url.searchParams.toString();
$done({path: modifiedPath});