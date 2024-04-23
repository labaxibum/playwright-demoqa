export class bookApiHelper{
    static async createAccountAPI(request, username, password){
        const responseCreateAccount = await request.post("https://demoqa.com/Account/v1/User", {
            data: {
                "userName": username,
                "password": password
            }
        });
        console.log(await responseCreateAccount.json());
        expect(responseCreateAccount.status()).toBe(201);
        const responseCreateAccountBody = await responseCreateAccount.json();
        return responseCreateAccountBody;
    }

    static async getTokenAPI(request, username, password){
        const responseToken = await request.post("https://demoqa.com/Account/v1/GenerateToken", {
            data: {
                "userName": username,
                "password": password
            }
        });
        console.log(await responseToken.json());
        const responseBody = await responseToken.json();
        token = responseBody.token;
        return token;
    }

    static async authorizationAPI(request, username, password){
        const responseAutho = await request.post("https://demoqa.com/Account/v1/Authorized", {
            data: {
                "userName": username,
                "password": password
            }
        });
        //console.log(await responseAutho.json());
        //expect(responseAutho.status()).toBe(200)
        // should return status 200
        return responseAutho.status();
    }

    static async addBookAPI(request, token, userID, isbn){
        const responseAddBook = await request.post('https://demoqa.com/BookStore/v1/Books', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            data: {
                "userId": userID,
                "collectionOfIsbns": [
                    {
                        "isbn": isbn
                    }
                ]
            }
        });
        //console.log(await responseAddBook.json());
        //expect(responseAddBook.status()).toBe(201);
        //should return status 201
        return responseAddBook.status();
        
    }

    static async deleteBookAPI(request, token, isbn, userID){
        const reponseDeleteBooks = await request.delete(`https://demoqa.com/BookStore/v1/Book`,{
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              data: {
                "isbn": isbn,
                "userId": userID
              }
        });
        //expect(reponseDeleteBooks.status()).toBe(204)
        //should return status 204
        return reponseDeleteBooks.status();
    }
}