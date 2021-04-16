class SwitchDAO{
    constructor(){
        this.listeSwitch = [new Switch("Bleu", "0,71", "2,2mm", "1,8mm", "4mm", "tactil", "50g", "HyperX", "clicky", "Oui", "80 million", 0),
                            new Switch("Rouge", "0,71", "2mm", "2mm", "4mm", "lineaire", "45g", "HyperX", "Not", "Oui", "80 million", 1),
                            new Switch("Noir", "0,71", "2mm", "2mm", "4mm", "lineaire", "60g", "Cherry", "Not", "Oui", "100 million", 2)];
    }
    
    lister(){
        return this.listeSwitch;
    }
    
      chercher(id){
        return this.listeSwitch.find(switch_ => switch_.id === id);
      }
    }