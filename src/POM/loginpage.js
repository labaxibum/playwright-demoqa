export class LoginPage{
    constructor(page){
        this.page = page;
        this.getUsernameField = page.getByPlaceholder('UserName');
        this.getPasswordField = page.getByPlaceholder('Password');
        this.getLoginButton = page.getByRole('button', { name: 'Login' });
    }

    async loginWithValidAccount(username, password){
       await this.getUsernameField.fill(username);
       await this.getPasswordField.fill(password);
       await this.getLoginButton.click();
    }
}
