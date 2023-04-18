enum tipos{
       alimento,
       perecedero,
       limpieza,
       condimento,
       bebida
}

export class producto{

    private _id: number

    private _nombre: string

    private _cantidad: number

    private _precio: number

    public tipo:tipos
    
    constructor(id:number,nombre:string,cantidad:number,precio:number, tipo:tipos){
this._id=id
this._nombre=nombre
this._cantidad=cantidad
this._precio=precio
this.tipo=tipo
}

    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }

    public get nombre(): string {
        return this._nombre
    }
    public set nombre(value: string) {
        this._nombre = value
    }
    public get cantidad(): number {
        return this._cantidad
    }
    public set cantidad(value: number) {
        this._cantidad = value
    }
    public get precio(): number {
        return this._precio
    }
    public set precio(value: number) {
        this._precio = value
}
}