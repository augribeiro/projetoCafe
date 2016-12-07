class ControleCafe{

	static getFuncionarios(){
		return window.DAO.ler();
	}

	static salvar(funcionarios){
		return window.DAO.salvar(funcionarios);
	}

	static excluir(nome){
		var funcionarios = this.getFuncionarios();
		for(var i = 0; i < funcionarios.length; i++){
			if(nome == funcionarios[i].nome){
				funcionarios.splice(i, 1);
				this.salvar(funcionarios);
			}
		}
	}

	static quemFazCafeHoje(){
		var funcionarios =  this.getFuncionarios();
		for(var i = 0; i < funcionarios.length; i++){
			if(funcionarios[i].jafoi === false)	return funcionarios[i].nome;
		}
	}
}