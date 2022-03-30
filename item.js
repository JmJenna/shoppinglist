const items = require('./fakeDb')


class Item {
    construtor(name, price) {
        this.name = name;
        this.price = price;

        items.push(this)
    }

    static findAll(){
        return items;
    }

    static update(name, data){
        let foundItem = Item.find(name);
        if (foundItem === undefined){
            throw { message : "NOT FOUND", status : 404}
        }
        foundItem.name = data.name;
        foundItem.price = data.price;
    }

    static find(name){
        const foundItem = items.find(v => v.name === name);
        if(foundItem === undefined){
            throw { message : "no found" , status : 404}
        }
        return foundItem;
    }

    static remove(name){
        let foundIdx = items.findIndex(v=> v.name === name);
        if(foundIdx === -1){
            throw { message : "Not Found", status : 404}
        }
        items.splice(foundIdx , 1)
    }


}

module.exports = Item;
