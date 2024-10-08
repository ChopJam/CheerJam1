var msgPort = null;
var cheerpXHandle = null;
function handleJITError(m)
{
	var e = document.getElementById("failuremessage");
	e.style.display = "block";
	e.textContent = "CheerpX Internal Error: "+m;
}
function handleParentMessage(e)
{
	if(e.data.t == "params")
	{
		var c = document.getElementById("ppfp");
		c.width = c.clientWidth;
		c.height = c.clientHeight;
		var pArray = [e.data.href, "width", c.clientWidth.toString(), "height", c.clientHeight.toString()];
		var p = e.data.params;
		for(var m in p)
		{
			pArray.push(m);
			pArray.push(p[m]);
		}
		// Handoff message handling to the Pepper API host
		msgPort.onmessage = null;
		var audioEnabler = e.data.disableAudio ? null : document.getElementById("audioenabler");
		cheerpXHandle.runPepperHost(document.getElementById("ppfp"), msgPort, {audioEnabler:audioEnabler}).then(function()
		{
			cheerpXHandle.run("/ppfp/ppfp", pArray);
		});
	}
	else
	{
		debugger;
	}
}
window.onmessage = function(e)
{
	if(e.data.t == "port")
	{
		msgPort = e.data.port;
		msgPort.onmessage = handleParentMessage;
		var opts = e.data.options;
		opts.mounts = [{type:"cheerpOS",dev:"/app",path:"/"},{type:"cheerpOS",dev:"/files",path:"/tmp"}];
		CheerpXApp.create(opts).then(function(cx){
			cheerpXHandle = cx;
			cx.setJITErrorCallback(handleJITError);
			//cx.createHud();
			msgPort.postMessage({t:"init"});
		});
	}
	else if(e.data.t == "failure")
	{
		var f = document.getElementById("failuremessage");
		f.style.display = "block";
		f.textContent = e.data.msg;
	}
	else
	{
		debugger;
	}
};
