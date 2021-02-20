// class animal{
//     constructor(especie, edad , color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;

//     }
// }

// let perro= new animal('caniche','10','blanco')

// document.write(perro.edad)

///////////////////////////////////////////////////////////////////////////////////////////////
// class animal{
//     constructor(especie, edad , color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `hola soy un ${this.especie} tengo ${this.edad} años y soy de color ${this.color}`

//     }verinfo(){
//         document.write(this.info + '<br>')
//     }

// }

// let perro= new animal('caniche','10','blanco')

// perro.verinfo()
////////////////////////////////////////////////////////////////////////////////////////////////
// class animal{
//     constructor(especie, edad, color){
//     this.especie = especie;
//     this.edad = edad;
//     this.color = color;
//     this.info = `hola soy un ${especie}, tengo ${edad} años y soy de color ${color}`

//     // }verinfo(){ <------ un 'metodo' se declara solo adentro de la class
//         document.write(this.info)
//     }

// }
// let perro= new animal('caniche','5', 'azul')
// perro.verinfo()

////////////////////////////////Herencia/////////////////////////////////////////////////////

class animal{
    constructor(especie, edad, color){
    this.especie = especie;
    this.edad = edad;
    this.color = color;
	this.info = `hola soy un ${especie}, tengo ${edad} años y soy de color ${color}`
	}

	verinfo(){
        document.write(this.info)
    }
}

class Perro extends animal{
    constructor(especie, edad, color , raza){
        super(especie,edad,color);
		this.raza= raza
		this.info = `hola soy un ${especie}, tengo ${edad} años y soy de color ${color} y de raza ${raza}`
    }
    ladrar(){
        document.write('waaaaooo')
    }
}

let perro= new Perro('canina','5', 'azul', 'doberman')
document.write(perro.info)