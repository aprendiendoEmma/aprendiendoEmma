class Animal { 
    constructor(especie, color, edad ) {
    this.especie = especie;
    this.color = color;
    this.edad = edad 
    this.info = `hola soy un ${this.especie} de color ${this.color} y tengo ${this.edad} añossss`;
} verinfo(){
    document.write(this.info)
}

}

class Perro extends Animal{
    constructor(especie,color, edad,raza){
        super(especie,color,edad)
        this.raza=raza
    }
     set setRaza(newRaza){
        this.raza=newRaza
     }
     get getRaza(){
         return this.raza;
     }

    }


let perro= new Perro('perro','rojo','12','doberman');
perro.setRaza = 'pitbull'
document.write(perro.getRaza)
