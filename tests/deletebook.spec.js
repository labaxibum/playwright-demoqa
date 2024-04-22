const { test, expect } = require('@playwright/test');
const username = "anhlet6";
const password = "Te5t1ng!";
const userID = "a1483dd0-3963-44c7-a157-0fdb5145086b"
const isbn = "9781449331818";
let token;

//isbn: 9781449331818
//Book name: Learning JavaScript Design Patterns
//UUID: 10c99905-2298-4eef-bf8a-1937ac4146e1

test.describe('Search book with multiple results', () => {
    test('check', async ({ request }) => {

        // const responseCreateAccount = await request.post("https://demoqa.com/Account/v1/User", {
        //     data: {
        //         "userName": username,
        //         "password": password
        //     }
        // });
        // console.log(await responseCreateAccount.json());
        // expect(responseCreateAccount.status()).toBe(201);
        // const responseCreateAccountBody = await responseCreateAccount.json();
        // console.log(responseCreateAccountBody);

        const responseToken = await request.post("https://demoqa.com/Account/v1/GenerateToken", {
            data: {
                "userName": username,
                "password": password
            }
        });
        console.log(await responseToken.json());
        expect(responseToken.status()).toBe(200);
        const responseBody = await responseToken.json();
        token = responseBody.token;
        console.log(token);

        const responseAutho = await request.post("https://demoqa.com/Account/v1/Authorized", {
            data: {
                "userName": username,
                "password": password
            }
        });
        console.log(await responseAutho.json());
        expect(responseAutho.status()).toBe(200)

        const responseAddBook = await request.post('https://demoqa.com/BookStore/v1/Books', {
            data: {
                "userId": userID,
                "collectionOfIsbns": [
                    {
                        "isbn": isbn
                    }
                ]
            }
        });
        console.log(await responseAddBook.body());
        expect(responseAddBook.status()).toBe(200)

        const responseGetData = await request.post(`https://demoqa.com/Account/v1/User/${isbn}`);
        console.log(await responseGetData.body());
    
    })
})
