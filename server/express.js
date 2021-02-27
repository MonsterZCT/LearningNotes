var express = require('express');
var app = express();

app.all("*", function (req, res, next) {
	console.log(req.headers.origin);
	// if (
	// 	// req.headers.origin.toLowerCase() == "http://www.zhangpeiyue.com" ||
	// 	req.headers.origin.toLowerCase().split(':')[0].includes("http://127.0.0.1"))
	// {
	//设置允许跨域的域名，*代表允许任意域名跨域
	res.header("Access-Control-Allow-Origin", req.headers.origin);
	// }


	//允许的header类型
	res.header("Access-Control-Allow-Headers", "content-type");
	//跨域允许的请求方式 
	res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
	if (req.method.toLowerCase() == 'options') {
		res.send(200); //让options尝试请求快速结束
	} else {
		next();
	}
})

var server = app.listen(8081, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://127.0.0.1:8081");

})

app.get('/', function (req, res) {
	let data = {
		status: 'success',
		code: 200,
		data: {
			name: 'jack',
			friends: ['lili', 'jone']
		}
	}
	res.send(data);
})

app.post('/', function (req, res) {
	console.log(req);
	let data = {
		status: 'success',
		code: 200,
		data: {
			name: 'jack',
			friends: ['lili', 'jone']
		}
	}
	console.log(data);
	res.send(data);
})