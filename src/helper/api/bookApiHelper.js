import { apiHelper } from "../../core/api/apiHelper";

const BASE_URL = process.env.BASE_URL;
export class bookApiHelper {
    static async createAccountAPI(request, username, password) {
        const responseCreateAccount = await request.post(
            BASE_URL + "Account/v1/User",
            {
                data: {
                    userName: username,
                    password: password,
                },
            },
        );
        //console.log(await responseCreateAccount.json());
        //expect(responseCreateAccount.status()).toBe(201);
        const responseCreateAccountBody = await responseCreateAccount.json();
        return responseCreateAccountBody;
    }

    static async getTokenAPI(request, username, password) {
        const responseToken = await request.post(
            BASE_URL + "Account/v1/GenerateToken",
            {
                data: {
                    userName: username,
                    password: password,
                },
            },
        );
        console.log(await responseToken.json());
        const responseBody = await responseToken.json();
        return responseBody.token;
    }

    static async authorizationAPI(request, username, password) {
        const responseAutho = await request.post(
            BASE_URL + "Account/v1/Authorized",
            {
                data: {
                    userName: username,
                    password: password,
                },
            },
        );
        apiHelper.validateTheUserSchema(await responseAutho.json());
        //expect(responseAutho.status()).toBe(200)
        // should return status 200
        return responseAutho.status();
    }

    static async addBookAPI(request, token, userID, isbn) {
        const responseAddBook = await request.post(
            BASE_URL + "BookStore/v1/Books",
            {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    userId: userID,
                    collectionOfIsbns: [
                        {
                            isbn: isbn,
                        },
                    ],
                },
            },
        );
    await apiHelper.validateTheAddBookSchema(await responseAddBook.json());
        console.log(await responseAddBook.json());
        //expect(responseAddBook.status()).toBe(201);

        //should return status 201
        return responseAddBook.status();
    }

    static async deleteBookAPI(request, token, isbn, userID) {
        const reponseDeleteBooks = await request.delete(
            BASE_URL + "BookStore/v1/Book",
            {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    isbn: isbn,
                    userId: userID,
                },
            },
        );
        await apiHelper.validateTheDeleteBookSchema(
            await reponseDeleteBooks.json(),
        );
        //expect(reponseDeleteBooks.status()).toBe(204)
        //should return status 204
        return reponseDeleteBooks.status();
    }

    static async addBookForUser(request, username, password, userID, isbn) {
        let token = await bookApiHelper.getTokenAPI(request, username, password);
        await bookApiHelper.authorizationAPI(request, username, password);
        await bookApiHelper.addBookAPI(request, token, userID, isbn);
    }
}

