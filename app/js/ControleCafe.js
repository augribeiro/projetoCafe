class ControleCafe{

	static initialize() {
		this.verificarSePrecisaReiniciarFluxo();

	}

	static verificarSePrecisaReiniciarFluxo(){
		var funcionarios = this.getFuncionarios();
		var precisaReiniciar = true;
		for(var i = 0; i < funcionarios.length; i++){
			if(funcionarios[i].jafoi === false){
				precisaReiniciar = false;
			}
		}
		if(precisaReiniciar === true){
			for(i = 0; i < funcionarios.length; i++)
				funcionarios[i].jafoi = false;
		}
	}

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

	static removerMulta(nome){
		var funcionarios = this.getFuncionarios();
		for(var i = 0; i < funcionarios.length; i++)
			if(nome == funcionarios[i].nome){
				funcionarios[i].multa -= 1;
				if(funcionarios[i].multa < 0) 
					funcionarios[i].multa = 0;
			}

			this.salvar(funcionarios);
	}
}