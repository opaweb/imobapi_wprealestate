jQuery(document).ready(function( $ ) {
    $(".contact-form-wrapper").submit(function(e){
        e.preventDefault();
        var full_name = $('input[name="name"]').val();
        var email = $('input[name="email"]').val();
        var phone = $('input[name="phone"]').val();
        var message = $('textarea[name="message"]').val();
        var tags = $('input[name="tags"]').val();
        var source = $('input[name="source"]').val();
        var subject = $('input[name="subject"]').val();
        var property_code = $('.property-detail-detail ul.list li:first-child div.value').text();
        var property_contract = $('.property-detail-detail div:contains("Status")').next().text();

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