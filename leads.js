$(".contact-form-wrapper").submit(function(e){
    e.preventDefault();
    var full_name = $('input[name="name"]').val();
    var email = $('input[name="email"]').val();
    var phone = $('input[name="phone"]').val();
    var message = $('textarea.message').val();

    $.ajax({
        type: "POST",
        url: leads.php,
        data: {'full_name': full_name, 'email': email, 'phone': phone, 'message': message},
        success: function(ret){
            console.log('Enviado com sucesso');
            console.log(ret);
        },
       //dataType: dataType
      });
});