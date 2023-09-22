"use strict";

class Pokemon{ // on créé une fonction pokemon qui comprend les stats (le nom l'attaque ect)
    constructor(name,attack,defense,hp,luck){
        this.name=name
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }

    attackPokemon(pokemon){  // on va créer la fonction d'attaque 
        if(this.isLucky()){ //si le pokémon chanceux il va pouvoir attaquer
            let damage=this.attack-pokemon.defense //les dommages infligés correspondent aux points d'attaque de l'assaillant - la défense de l'attaqué
            pokemon.hp -= damage // ainsi les points de vie de l'attaqué diminuront de la valeur de dommage
            console.log(this.name+' a attqué '+pokemon.name+' pour '+damage+' de degat il lui reste '+pokemon.hp+" points de vie");
            // console.log une phrasae qui explique que le pokémon a attaqué de tant de dommage et qu'il reste tant de points de vie à l'attaqué
        }else { //s'il n'est pas chanceux il rate son attaque
            console.log(this.name+" a raté son attaque");
        }
    }

    isLucky(){ 
        // pou savoir s'il est chanceux, on créer la fonction lucky, pour qu'elle soit validé il faut que sa chance soitt supérieur au chiffre généré aléatoirement
        return this.luck>Math.random()
    }

}

let pikachu=new Pokemon('pikachu',14,8,100,0.5); // on créé donc deux pokemon distinct
let rondoudou=new Pokemon('rondoudou',18,4,70,0.8);

while(pikachu.hp >0 && rondoudou.hp>0){// cette boucle continuera tant que les deux pokemon possèdent des hp strictement supérieur à 0
    pikachu.attackPokemon(rondoudou) // on commence par la phase d'attaque du premier pokémon
    if(rondoudou.hp<=0){ // si les hp de rondoudou sont inférieur ou égaux à 0 alors sera affiché comme quoi le pokémon est mort
        console.log(rondoudou.name+" is dead !");
        break;
    }
    rondoudou.attackPokemon(pikachu) //puis la phase d'attaque de rondoudou qui va fonctionner de la même manière
    if(pikachu.hp<=0){
        console.log(pikachu.name+" is Dead !");
        break
    }
} //le combat se termine donc à la mort d'un des deux pokémons
