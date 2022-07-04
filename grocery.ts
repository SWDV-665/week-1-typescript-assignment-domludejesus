class Grocery {
    name: string; 
    quan: number;
    price: number; 
    currency: string; 
    desc: string;   


    constructor( name: string, desc: string ,quan: number, currency: string,  price: number ) {
        this.name = name;
        this.desc = desc; 
        this.quan = quan;
        this.currency = currency;  
        this.price = price; 
    }
}

const bread = new Grocery("Bread", " Rye Bread ", 10 , "USD($)", 2.50); 
const oranges = new Grocery("Oranges", " Picked For Freshness ", 20 , "USD($)", 7.99); 
const yogurt = new Grocery("Yogurt", " Chobani Fresh ", 6 , "USD($)", 4.50);
const chicken = new Grocery("Chicken", " 100% Real Chicken ", 10, "USD($)", 15.99); 

const groceries: Grocery[] = []; 

groceries.push(bread); 
groceries.push(oranges); 
groceries.push(yogurt); 
groceries.push(chicken); 

const table = document.getElementById('groceries') as HTMLTableElement;

groceries.map(Grocery => {
    const {name, desc, quan, currency, price} = Grocery;
    const row = table.insertRow()
    row.innerHTML = `
            <td id="name">${name}</td>
            <td id="desc">${desc}</td>
            <td id="qty">${quan}</td>
            <td id="currency">${currency}</td> 
            <td id="price">${price}</td>`; 

}); 