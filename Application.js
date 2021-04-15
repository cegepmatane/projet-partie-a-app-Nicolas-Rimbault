class Application {
  constructor(window, vueListeSwitch, vueSwitch){

    this.window = window;
    this.listeSwitch = [{couleur:"Bleu", prix:"0,71", distanceActivation:"2,2mm", distanceMorte:"1,8mm", distanceTotal:"4mm", type:"tactil", forceAction:"50g", marque:"HyperX",clickyOrNot:"clicky", id:0},
                        {couleur:"Rouge", prix:"0,71", distanceActivation:"2mm", distanceMorte:"2mm", distanceTotal:"4mm", type:"lineaire", forceAction:"45g", marque:"HyperX",clickyOrNot:"Not", id:1},
                        {couleur:"Noir", prix:"0,71", distanceActivation:"2mm", distanceMorte:"2mm", distanceTotal:"4mm", type:"lineaire", forceAction:"60g", marque:"Cherry MX",clickyOrNot:"Not", id:2},]
                        //{couleur:"", prix:"", distanceActivation:"", distanceMorte:"", distanceTotal:"", type:"", forceAction:"", marque:"",clickyOrNot:"", id:0},
    this.vueListeSwitch = vueListeSwitch;

    this.vueSwitch = vueSwitch;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.vueListeSwitch.initialiserListeSwitch(this.listeSwitch);
      this.vueListeSwitch.afficher();

    }else{

      let navigation = hash.match(/^#switch\/([0-9]+)/);
      let idSwitch = navigation[1];

      let switch_ = this.listeSwitch.find(switch_ => switch_.id === parseInt(idSwitch));
      this.vueSwitch.initialiserSwitch(switch_);
      this.vueSwitch.afficher();
    }
  }

}

new Application(window, new VueListeSwitch(), new VueSwitch());

