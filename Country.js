class Country{
    constructor(name, age, benua, iscountry){
        this.name = name;
        this.age = age;
        this.benua = benua;
        this.iscountry = iscountry;
    }
}

class Malaysia extends Country {
    constructor(name, age, benua) {
        super(name, age, benua, true);
    }

    kembang() {
        console.log (this.name + ' adalah negara berkembang!');
    }
}

class Singapore extends Country {
    constructor(name, age, benua) {
        super(name, age, benua, true);
    }

    maju() {
        console.log (this.name + ' adalah negara maju! ');
    }
}

const myMalaysia = new Malaysia ("Indonesia", 78, "Benua Asia")
const mySingapore = new Singapore ("Amerika", 247, "Benua Amerika")

 myMalaysia.kembang();
 mySingapore.maju();
 console.log(myMalaysia)
 console.log(mySingapore)
