class ControleCafe{

	static getDao(){

	}

	static getFuncionarios(){
		
	}

	static salvar(funcionarios){

	}

	static excluir(i){

	}

	static quemFazCafe(){
		var funcionarios =  this.getFuncionarios();
		for(var i = 0; i < funcionarios.length; i++){
			if(funcionarios[i].jafoi === false)	return funcionarios[i].nome;
		}
	}
}