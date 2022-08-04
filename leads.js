jQuery(document).ready(function( $ ) {
    $(".contact-form-wrapper").submit(function(e){
        e.preventDefault();
        var full_name = $('input[name="name"]').val();
        var email = $('input[name="email"]').val();
        var phone = $('input[name="phone"]').val();
        var message = $('textarea.message').val();

        var tags = $('input[name="tags"]').val();
        var source = $('input[name="source"]').val();
        var subject = $('input[name="subject"]').val();
        var property_code = $('input[name="property_code"]').val();
        var property_contract = $('input[name="property_contract"]').val();




        var url = 'https://' + document.location.hostname + '/wp-content/plugins/imobapi_wprealestate/leads.php';

        $.ajax({
            type: "POST",
            url: url,
            data: {'full_name': full_name, 'email': email, 'phone': phone, 'message': message, 'tags': tags, 'source': source, 'subject': subject, 'property_code': property_code, 'property_contract': property_contract},
            success: function(ret){
                console.log('Enviado com sucesso');
                console.log(ret);
            },
        });
    });
});