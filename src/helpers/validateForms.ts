 export enum VatidateRuleType {
    Name = "name",
    Login = "login",
    Password = "password",
    Email = "email",
    Phone = "phone"
}

type ValidateRule = {
    value: string,
    type: VatidateRuleType
}

export function valodateForm(rules: ValidateRule[]) : string {
    let errorMessage = "";
    const regLogin = /^[a-z0-9_-]{3,20}$/;
    const regPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,40}$/;
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const regPhone = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d.{10,15}$/;
    const regName = /^[a-zA-Z][a-zA-Z0-9-]+$/;

    for (let i = 0; i < rules.length; i++) {
        const { type, value } = rules[i];

        if (type === VatidateRuleType.Login) {
            if (!regLogin.test(value)) {
                errorMessage = "enter a valid login";
                break;
            }
        } else if (type === VatidateRuleType.Password) {
            if (!regPassword.test(value)) {
                errorMessage = "enter a valid password";
                break;
            }
        } else if (type === VatidateRuleType.Email) {
            if (!regEmail.test(value)) {
                errorMessage = "enter a valid email";
                break;
            }
        } else if (type === VatidateRuleType.Phone) {
            if (!regPhone.test(value)) {
                errorMessage = "enter a valid phone";
                break;
            }
        } else if (type === VatidateRuleType.Name) {
            if (!regName.test(value)) {
                errorMessage = "enter a valid name";
                break;
            }
        }
    }
    return errorMessage;
}
