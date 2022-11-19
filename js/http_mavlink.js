
function show(msg) {
	console.log("I have arm")
			alert(msg)
		}

function HTTP_GET(){
			var httpRequest = new XMLHttpRequest();
			        httpRequest.open('GET', 'http://192.168.63.154/control?var=framesize&val=10', true);
			        httpRequest.send();
			       
			        httpRequest.onreadystatechange = function () {
			            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
			                var json = httpRequest.responseText;
			                console.log(json);
			            }
			        };
			
		}
function HTTP_POST(msg,value){
			
			var httpRequest = new XMLHttpRequest();
			httpRequest.open('POST', 'http://localhost:19999/', true); 
			httpRequest.setRequestHeader("Content-type","multipart/form-data; boundary=----WebKitFormBoundaryypzmvcUdKsqJRGVn");
			// httpRequest.setRequestHeader("Content-type","application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
			var obj = {cmd: msg,alt_value:value};
			httpRequest.send(JSON.stringify(obj));
			/**
			 * 获取数据后的处理程序
			 */
			httpRequest.onreadystatechange = function () {
				console.log("发送成功等请求。。。")//请求后的回调接口，可将请求成功后要执行的程序写在其中
			    if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
			       console.log("发送成功等请求")
					var json = httpRequest.responseText;//获取到服务端返回的数据
					var state_res=document.getElementById("check_state")
					state_res.value=json.toString()
					
			        console.log(json);
					console.log("响应概况");
			    }
			};
			
			
		}
		
		
		
		
		
		// import java.io.IOException;
		// import java.io.InputStream;
		// import java.io.OutputStreamWriter;
		// import java.net.HttpURLConnection;
		// import java.net.URL;
		// import java.util.Scanner;
		
		// class Main {
		
		// 	public static void main(String[] args) throws IOException {
		// 		URL url = new URL("http://localhost:19999/");
		// 		HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
		// 		httpConn.setRequestMethod("POST");
		
		// 		httpConn.setRequestProperty("Accept", "*/*");
		// 		httpConn.setRequestProperty("Accept-Language", "zh-CN,zh;q=0.9");
		// 		httpConn.setRequestProperty("Connection", "keep-alive");
		// 		httpConn.setRequestProperty("Content-type", "multipart/form-data; boundary=----WebKitFormBoundaryypzmvcUdKsqJRGVn");
		// 		httpConn.setRequestProperty("Origin", "http://127.0.0.1:8848");
		// 		httpConn.setRequestProperty("Referer", "http://127.0.0.1:8848/");
		// 		httpConn.setRequestProperty("Sec-Fetch-Dest", "empty");
		// 		httpConn.setRequestProperty("Sec-Fetch-Mode", "cors");
		// 		httpConn.setRequestProperty("Sec-Fetch-Site", "cross-site");
		// 		httpConn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36");
		// 		httpConn.setRequestProperty("sec-ch-ua", "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"");
		// 		httpConn.setRequestProperty("sec-ch-ua-mobile", "?0");
		// 		httpConn.setRequestProperty("sec-ch-ua-platform", "\"Windows\"");
		
		// 		httpConn.setDoOutput(true);
		// 		OutputStreamWriter writer = new OutputStreamWriter(httpConn.getOutputStream());
		// 		writer.write("{\"cmd\":\"arm\",\"alt_value\":\"3\"}");
		// 		writer.flush();
		// 		writer.close();
		// 		httpConn.getOutputStream().close();
		
		// 		InputStream responseStream = httpConn.getResponseCode() / 100 == 2
		// 				? httpConn.getInputStream()
		// 				: httpConn.getErrorStream();
		// 		Scanner s = new Scanner(responseStream).useDelimiter("\\A");
		// 		String response = s.hasNext() ? s.next() : "";
		// 		System.out.println(response);
		// 	}
		// }