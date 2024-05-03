import { BasePage } from "./basepage";

export class LoginPage extends BasePage {
    constructor(page){
        super(page);
        this.getUsernameField = page.getByPlaceholder('UserName');
        this.getPasswordField = page.getByPlaceholder('Password');
        this.getLoginButton = page.getByRole('button', { name: 'Login' });
    }

    async loginWithAccount(username, password){
       await this.getUsernameField.fill(username);
       await this.getPasswordField.fill(password);
       await this.getLoginButton.click();
    }
}
