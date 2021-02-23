class Animal{
    constructor(especie, edad, color ){
        this.especie = especie ;
        this.edad = edad;
        this.color = color
        this.info = `hola soy un ${this.especie} tengo ${this.edad} años y soy de color ${this.color}`

    } verInfo() {
        console.log(this.info)
    }
}

let leon = new animal ("leon", 25,"marron")
let tigre = new animal ("tigre", 50,"naranja con rayas negras")
let cocodrilo = new animal ("cocodrilo", 100,"verde")
leon.verInfo()
tigre.verInfo()
cocodrilo.verInfo()



class Leon extends Animal{
        constructor(especie, edad, color,muertes){
            super(especie, edad, color );
            this.muertes = muertes
            this.info = `hola soy un ${this.especie} tengo ${this.edad} años y soy de color ${this.color}. tengo ${this.muertes} muertes`
        }
    rugido(){
        console.log('wwwwaaaaaaa')

    }
}
let leon = new Leon('leon', 25, 'marron');
leon.rugido() 