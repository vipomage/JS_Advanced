function validate() {
    $('form').on('click', (e) => {
        e.preventDefault();
    });
    let isCompany = false;
    $('input[type=checkbox]').click(()=> {
        $('fieldset#companyInfo').toggle();
        isCompany = true;
    });

    $('button#submit').on('click', () => {
        let user = $('input#username');
        let email = $('input#email');
        let password = $('input#password');
        let confPass = $('input#confirm-password');

        let userIsValid = false;
        let emailIsValid = false;
        let passwdIsValid = false;
        let confPassIsValid = false;
        let companyIsValid = false;


        usernameOk(user.val());
        emailOk(email.val());
        passwordOk(password.val(),confPass.val());
        if(isCompany){
            let value = $('input#companyNumber').val();
            if (value < 1000 || value > 9999) {
                $('input#companyNumber').css('border-color','red');
            }else{
                $('input#companyNumber').css('border-color','');
                $('input#companyNumber').css('border','none');
                companyIsValid = true;
            }
        }

        if (userIsValid && emailIsValid && passwdIsValid && confPassIsValid &&!isCompany){
            $('div#valid').toggle();
        }else{
            $('div#valid').hide();
        }
        if (userIsValid && emailIsValid && passwdIsValid && confPassIsValid && isCompany){
            $('div#valid').toggle();
        }
        if(isCompany &&!companyIsValid){
            $('div#valid').hide();
        }

        function emailOk(input) {
            let regex = /^([\w]+@[\w\.]+)$/g;
            if(regex.exec(input) !== null ){
                email.css('border','none');
                email.css('border-color','');
                emailIsValid = true;
            }else{
                email.css('border-color','red');
            }
        }

        function usernameOk(input) {
            let regex = /^([A-Za-z\d])+$/g;
            let match = regex.exec(input);
            if (match !== null) {
                if (input.length >2 && input.length <21) {
                    user.css('border-color', '');
                    user.css('border', 'none');
                    userIsValid =true;
                }else{
                    user.css('border-color', '');
                    user.css('border-color', 'red');
                }
            }else{
                user.css('border-color', '');
                user.css('border-color', 'red');
            }
        }

        function passwordOk(input, input2) {
            if (input === input2 && input2 !== '' && input.length >4 && input.length <16) {
                let match = /^([a-zA-Z0-9_]+)$/g.exec(input);
                if (match !== null) {
                    password.css('border', 'none');
                    confPass.css('border', 'none');
                    password.css('border-color', '');
                    confPass.css('border-color', '');
                    passwdIsValid = true;
                    confPassIsValid = true;
                }else{
                    password.css('border-color', 'red');
                    confPass.css('border-color', 'red');
                }
            }else{
                password.css('border-color', 'red');
                confPass.css('border-color', 'red');
            }

        }
    });
}