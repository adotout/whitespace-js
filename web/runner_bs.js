(function() {
	document.getElementById('run').onclick = function() {
		require(["../node_modules/textarea-io/src/textarea-io.js"], function() {
			outStream = {};
			inStream = {};
			document.getElementById("input_output").value = ""
			var TA = new TextAreaIO(document.getElementById("input_output"))
			outStream.put = function(val) {
				TA.Put(val);
			}
			inStream.get = function(callback) {
				TA.Get(callback, "char");
			}
			inStream.get_n = function(callback) {
				TA.Get(callback, "num");
			}
			bfp = new WhitespaceProgram(document.getElementById("program").value, inStream, outStream, true)
			bfp.run()
		});
	}
	document.getElementById('print').onclick = function() {
		require(["../node_modules/textarea-io/src/textarea-io.js"], function() {
			bfp = new WhitespaceProgram(document.getElementById("program").value, null, null, true)
			var temp = bfp.print()
			document.getElementById("ws_program").value = temp;
		});
	}
})()