
class CommonHelpers{
    static fs = require('fs');
    static generateRnadomeNumber(){
        return Math.floor(1000000 + Math.random() * 9000000);
    }
    static async readRegistrationTestData(filePath: string){
        return await JSON.parse(this.fs.readFileSync(filePath))
    }
    static async updateRegistrationData(){
        var data = await JSON.parse(this.fs.readFileSync('test data/registerationData.json'))
        data['registrationData']['username'] = "Adel98"+this.generateRnadomeNumber()
        data['registrationData']['ssn'] = ""+this.generateRnadomeNumber()
        data['registrationData']['accounts'] = []
        await this.fs.writeFileSync('test data/registerationData.json',JSON.stringify(data),(err) => err && console.error(err))
    }

    static async updateLoginCredentialsData(){
        var data = await JSON.parse(this.fs.readFileSync('test data/registerationData.json'))
        await this.fs.writeFileSync('test data/userInfo.json',JSON.stringify({"loginInfo":data['registrationData']}),(err) => err && console.error(err))
    }

    static async updateAccounts(accountNumber){
        var data = await JSON.parse(this.fs.readFileSync('test data/userInfo.json'))
        data['loginInfo']['accounts'] = [...data['loginInfo']['accounts'],accountNumber]
        await this.fs.writeFileSync('test data/userInfo.json',JSON.stringify(data),(err) => err && console.error(err))
    }

    static async readUserInfo(){
        return await JSON.parse(this.fs.readFileSync('test data/userInfo.json'));
    }
}
export default CommonHelpers