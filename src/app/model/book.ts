export class Book {
    constructor(
        private _id: number,
        private _title: string,
        private _auther: string,
        private _price: number,
    ) {}
    
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get auther(): string {
        return this._auther;
    }
    public set auther(value: string) {
        this._auther = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }


    
}
