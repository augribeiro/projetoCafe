$(function(){
	var funcionarios = window.DAO.ler();
	// var quemFazCafe = function(){
	// 	for(var i = 0; i < funcionarios.length; i++){
	// 		if(funcionarios[i].jafoi === false)	return funcionarios[i].nome;
	// 	}
	// };
	var trocarPeriodo = function(hora){
		if(hora >= 12){
			$('span[name="txtHoraDia"]').text('esta tarde');
		}else if(hora < 12 && hora > 0){
			$('span[name="txtHoraDia"]').text('esta manhã');
		}
	};

	var popularTabela =  function(e){
		var funcionarios = ControleCafe.getFuncionarios();
		var trHTML = '';
		$('tr[data-type="dynamic"]').remove();
		$.each(funcionarios, function(i) {
		    trHTML += '<tr data-type="dynamic">' +
		    			'<td class="nome">' + 
		    				funcionarios[i].nome + 
		    			'</td>' + 
		    			'<td class="multa">' +
		    				funcionarios[i].multa + '<button id="remover" class="fa fa-minus-square-o button-reset" aria-hidden="true"></button>'  +
		    			'</td>' +
		    			'<td class="remove">X</td>' + 
		    			'</tr>';
		});

		$('.tabelaUsuario').append(trHTML);
	};
	
	$('.formCadastro').on('submit', function(e){
		e.preventDefault();
		var nomeFunc = $('input[name=nomeFunc]').val();
		ControleCafe.salvar(funcionarios);
		funcionarios = ControleCafe.getFuncionarios();
		popularTabela();
	});
	
	$('.tabelaUsuario').on("click", "td.remove",function(){
		var $this = $(this);
		var pai = $this.parent();
		var filho = pai.find('td.nome').text();
		if(confirm('Deseja excluir mesmo o funcionário ' + filho )){
			ControleCafe.excluir(filho);
		}
		popularTabela();
		});

	$('.tabelaUsuario').on("click", "button", function(){
		var $this = $(this);
		var nomeFunc =  $this.parent().parent().find('td.nome').text();
		ControleCafe.removerMulta(nomeFunc);
		popularTabela();
	});

	$('.fezCafe').on('click', function(){
		var $this = $(this);
		var texto = $this.text();
		ControleCafe.fezCafe(texto);	
		$('.txtNomePessoa').text(ControleCafe.quemFazCafeHoje());
		popularTabela();
	});

	popularTabela();
	trocarPeriodo(new Date().getHours());
	$('.txtNomePessoa').text(ControleCafe.quemFazCafeHoje());

});
