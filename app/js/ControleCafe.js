class ControleCafe{

	static getFuncionarios(){
		return window.DAO.ler();
	}

	static salvar(funcionarios){
		this.getFuncionarios.salvar(funcionarios);
	}

	static excluir(i){

	}

	static quemFazCafeHoje(){
		var funcionarios =  this.getFuncionarios();
		for(var i = 0; i < funcionarios.length; i++){
			if(funcionarios[i].jafoi === false)	return funcionarios[i].nome;
		}
	}
}