$(document).ready(function() {
    $('.error').hide();
    $('.fooderror').addClass('error').hide();
    $('.payerror').addClass('error').hide();
    $('.userid').focus(function() {
        $(this).addClass('inputs');
    });
     $('.userid').blur(function() {
        $(this).removeClass('inputs');
    });
    $('.password').focus(function() {
        $(this).addClass('inputs');
    });
     $('.password').blur(function() {
        $(this).removeClass('inputs');
    });
    $('.emailadd').focus(function() {
        $(this).addClass('inputs');
    });
     $('.emailadd').blur(function() {
        $(this).removeClass('inputs');
    });

    var flag = true;
    $('.submit').click(function(event) {
        var data = $('.userid').val();
        if (!validate_userid(data)) {
            $('.userid').next().show();
            flag = false;
        } else {
            $('.userid').next().hide();
        }

        data = $('.password').val();
        if (!validate_password(data)) {
            $('.password').next().show();
            flag = false;
        } else {
            $('.password').next().hide();
        }


        data = $('.emailadd').val();
        if (!validate_email(data)) {
            $('.emailadd').next().show();
            flag = false;
        } else {
            $('.emailadd').next().hide();
        }


        var count = 0;
        $('div').find(':checkbox').each(function() {
            if ($(this).is(':checked')) {
                count++;
            }
        });
        if (count == 0) {
            $('.fooderror').css({ 'margin-left': 250 }).show();
            flag = false;
        } else {
            $('.fooderror').hide();
        }

        var radio = $('div').find(':radio').filter(':checked')
        if (radio) {
            $('.payerror').hide();
        } else {
            $('.paerror').show();
            flag = false;
        }

        count = $('select option:selected').val();
        if (count == 0) {
            $('.infobox').next().show();
            flag = false;
        } else {
            $('.infobox').next().hide();
        }
        if (!flag) {
            event.preventDefault();
        }
    });
});

function validate_userid(uid) {
    var pattern = new RegExp(/^[\w]+$/);
    return pattern.test(uid);
}

function validate_password(upass) {
    var pattern = new RegExp(/[^\s]{6,12}/);
    return pattern.test(upass);
}

function validate_email(email) {
    var pattern = new RegExp(/^[\w]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
    return pattern.test(email);
}