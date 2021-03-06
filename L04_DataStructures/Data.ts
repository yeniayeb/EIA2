namespace L04_HomeHelper {
    export interface Item {
        name: string;
        value: string;
        price: number;
        unit: string;
       
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        Einkauf: [
            { name: "Butter", value: "Butter", price: 0.79, unit: "Stück"}, 
            { name: "Milch", value: "Milch", price: 1.20, unit: "Liter" },
            { name: "Mehl", value: "Mehl", price: 2.30, unit: "Packung(en)"},
            { name: "Zucker", value: "Zucker", price: 1.99, unit: "Stück"},
            { name: "Eier", value: "Eier", price: 2.99, unit: "Stück"},
            { name: "Salz", value: "Salz", price: 2.50, unit: "Stück"},
            { name: "Brot", value: "Brot", price: 4.00, unit: "Stück"}
        ],
        Supermarkt: [
            { name: "Edeka", value: "Edeka", price: 0, unit: ""}, 
            { name: "Aldi", value: "Aldi", price: 0, unit: ""}, 
            { name: "Lidl", value: "Lidl", price: 0, unit: ""}, 
            { name: "Rewe", value: "Rewe", price: 0, unit: ""} 
        ],
        Haushalt: [
            { name: "Rasen mähen" , value: "", price: 10.00, unit: ""},
            { name: "Hund ausführen", value: "", price: 10.00, unit: ""},
            { name: "Staubsaugen", value: "", price: 8.00, unit: ""},
            { name: "Pflanzen gießen", value: "", price: 5.00, unit: ""}
        ],
        Bank: [
            { name: "Geld abheben", value: "", price: 3.00, unit: ""},
            { name: "Geld einzahlen", value: "", price: 3.00, unit: ""}
        ],
        Zahlung: [
            { name: "Bar", value: "", price: 0, unit: ""},
            { name: "Bankeinzug", value: "", price: 0, unit: ""},
            { name: "Überweisung", value: "", price: 0, unit: ""}
        ]
    };


}