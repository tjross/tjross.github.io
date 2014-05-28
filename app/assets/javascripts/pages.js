Layers.pages = {
    init: function() {
        var _this = this;
    },

   submitCustomerForm: function(form) {
        var $form = $(form);
        var $button = $form.find('button');
        $('.error-message').hide();
        $button.prop('disabled', true).find('span.text').text('Submitting').siblings('i.loader').show(400, function() {
            $.ajax('/ajax/inquiry', {
                type: 'POST',
                data: $form.serialize(),
                beforeSend: function(jqXHR, settings) {
                    jqXHR.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
                },
                success: function(data) {
                    if(data == 'success') {
                        $('#customer_modal .form-panel').fadeOut({
                            complete: function() {
                                $('#customer_modal .thankyou-panel').fadeIn();
                            }
                        });
                        //ga('send', 'event', 'contact', 'submit', 'homepage');
                    } else {
                        $button.prop('disabled', false).find('span.text').text('Send Message').siblings('i.loader').hide();
                        $('#customer_modal .error-message').fadeIn();
                    }
                }
            });
        });
    },
    submitDesignerForm: function(form) {
        var $form = $(form);
        var $button = $form.find('button');
        $('.error-message').hide();
        $button.prop('disabled', true).find('span.text').text('Submitting').siblings('i.loader').show(400, function() {
            $.ajax('/ajax/inquiry', {
                type: 'POST',
                data: $form.serialize(),
                beforeSend: function(jqXHR, settings) {
                    jqXHR.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
                },
                success: function(data) {
                    if(data == 'success') {
                        $('#designer_modal .form-panel').fadeOut({
                            complete: function() {
                                $('#designer_modal .thankyou-panel').fadeIn();
                            }
                        });
                        //ga('send', 'event', 'contact', 'submit', 'homepage');
                    } else {
                        $button.prop('disabled', false).find('span.text').text('Send Message').siblings('i.loader').hide();
                        $('#customer_modal .error-message').fadeIn();
                    }
                }
            });
        });
    },
    submitContactForm: function(form) {
        var $form = $(form);
        var $button = $form.find('button');
        $('.error-message').hide();
        $button.prop('disabled', true).find('span.text').text('Submitting').siblings('i.loader').show(400, function() {
            $.ajax('/ajax/inquiry', {
                type: 'POST',
                data: $form.serialize(),
                beforeSend: function(jqXHR, settings) {
                    jqXHR.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
                },
                success: function(data) {
                    if(data == 'success') {
                        $('.contact-form').slideUp({
                            duration: 600,
                            complete: function() {
                                $('.contact-form-success').fadeIn();
                            }
                        });
                        //ga('send', 'event', 'contact', 'submit', 'homepage');
                    } else {
                        $button.prop('disabled', false).find('span.text').text('Send Message').siblings('i.loader').hide();
                        $('.contact-form .error-message').fadeIn();
                    }
                }
            });
        });
    }
}
