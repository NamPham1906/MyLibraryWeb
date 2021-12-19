class Util{
    getName = (fullname)=>{
        const tokens = fullname.split(" ");
        return tokens[tokens.length - 1];
    }
}

module.exports = new Util();