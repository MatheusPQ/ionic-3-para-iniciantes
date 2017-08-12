import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
	selector: 'page-feed',
	templateUrl: 'feed.html',
	providers: [
		MoovieProvider //vai carregar a instância/faz a injeção
	]
})


export class FeedPage {
	public nome_usuario:string = "Matheus Pinheiro"; //Restringe os valores que podem ser atribuidos na var.
	// var:any

	public objeto_feed = { //Objeto!
		titulo: "Matheus Pinheiro",
		data: "November 5, 1955",
		descricao: "Criando um app!",
		qntd_likes: 12,
		qntd_comments: 4,
		time_comment: "11h ago"
	}

	public lista_filmes = new Array<any>(); //Vira um obj de javaScript

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private movieProvider: MoovieProvider) {
	}

	public somaDoisNumeros(num1:number, num2:number):void{
		alert(num1 + num2);
	}


	ionViewDidLoad() {
	//this.somaDoisNumeros(10, 99);
		this.movieProvider.getLatestMovies().subscribe(
			data=>{ //Sucesso. '=>' declara uma função na mesma linha. Maneira curta de criar uma função
				const response = (data as any); //Transformou response como um objeto de qualquer tipo
				const objeto_retorno = JSON.parse(response._body); //Transforma esse valor em JSON, pois o Angular transforma em String
				this.lista_filmes = objeto_retorno.results;
				//Na documentação, results é a lista de filmes
				console.log(objeto_retorno);
				//O response do http não tem a propriedade _body. Por isso se faz um cast
			}, error => { //Caso der um erro, obviamente
				console.log(error);
			}
		); //Observable basicamente fica 'observando' uma função, aguardando um resultado
	}

}
