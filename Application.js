class Application {
  constructor(window, vueListeSwitch, vueSwitch){

    this.window = window;
    /*
    this.listeSwitch = [{couleur:"Bleu", prix:"0,71", distanceActivation:"2,2mm", distanceMorte:"1,8mm", distanceTotal:"4mm", type:"tactil", forceAction:"50g", marque:"HyperX",clickyOrNot:"clicky", rgbCompatibility:"Oui", dureeDeVie:"80 million", id:0},
                        {couleur:"Rouge", prix:"0,71", distanceActivation:"2mm", distanceMorte:"2mm", distanceTotal:"4mm", type:"lineaire", forceAction:"45g", marque:"HyperX",clickyOrNot:"Not", rgbCompatibility:"Oui", dureeDeVie:"80 million", id:1},
                        {couleur:"Noir", prix:"0,71", distanceActivation:"2mm", distanceMorte:"2mm", distanceTotal:"4mm", type:"lineaire", forceAction:"60g", marque:"Cherry MX",clickyOrNot:"Not", rgbCompatibility:"Oui", dureeDeVie:"100 million", id:2},]
                        //{couleur:"", prix:"", distanceActivation:"", distanceMorte:"", distanceTotal:"", type:"", forceAction:"", marque:"",clickyOrNot:"", rgbCompatibility:"", dureeDeVie:"", id:0}
    */
    this.listeSwitch = [new Switch("Bleu", "0,71", "2,2mm", "1,8mm", "4mm", "tactil", "50g", "HyperX", "clicky", "Oui", "80 million", 0),
                        new Switch("Rouge", "0,71", "2mm", "2mm", "4mm", "lineaire", "45g", "HyperX", "Not", "Oui", "80 million", 1),
                        new Switch("Noir", "0,71", "2mm", "2mm", "4mm", "lineaire", "60g", "Cherry", "Not", "Oui", "100 million", 2)]
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

