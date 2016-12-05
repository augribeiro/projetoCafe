window.IO = {
	salvar: function(data){
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'http://localhost/workspaceGitting/projeto_cafe/io/salvar.php', false);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.send(JSON.stringify(data));
	},

	ler: function(){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://localhost/workspaceGitting/projeto_cafe/io/ler.php', false);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.send(null);
		return JSON.parse(xhr.responseText);
	}
};