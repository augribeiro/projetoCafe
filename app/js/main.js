$(function(){
	var funcionarios = window.IO.ler();
	var quemFazCafe = function(){
		for(var i = 0; i < funcionarios.length; i++){
			if(funcionarios[i].jafoi === false)	return funcionarios[i].nome;
		}
	};
	var trocarPeriodo = function(hora){
		if(hora >= 12){
			$('span[name="txtHoraDia"]').text('esta tarde');
		}else if(hora < 12 && hora > 0){
			$('span[name="txtHoraDia"]').text('esta manhã');
		}
	};

	var popularTabela =  function(e){
		var trHTML = '';
		$('tr[data-type="dynamic"]').remove();
		$.each(funcionarios, function(i) {
		    trHTML += '<tr data-type="dynamic"><td class="nome">' + funcionarios[i].nome + '</td><td class="remove">X</td></tr>';
		});

		$('.tabelaUsuario').append(trHTML);
	};
	
	$('.formCadastro').on('submit', function(e){
		e.preventDefault();
		var nomeFunc = $('input[name=nomeFunc]').text();
		if(nomeFunc !== ""){
			funcionarios.push({nome: nomeFunc, jafoi: false});
			window.IO.salvar(funcionarios);
			funcionarios = window.IO.ler();
		}
			popularTabela();
	});
	
	$('.tabelaUsuario').on("click", "td.remove",function(){
		var $this = $(this);
		var pai = $this.parent();
		var filho = pai.find('td.nome').text();
		for(var i = 0; i < funcionarios.length; i++){
			if(filho === funcionarios[i].nome){
				funcionarios.splice(i, 1);
				window.IO.salvar(funcionarios);
				return;
			}
		}

	});

	popularTabela();
	trocarPeriodo(new Date().getHours());
	$('span.txtNomePessoa').text(quemFazCafe());

});