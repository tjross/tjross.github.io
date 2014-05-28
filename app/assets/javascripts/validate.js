$( document ).ready(function() {

    //*********************************************************************************************************
    //      CUSTOMER FORM
    //*********************************************************************************************************

    $("#customer_inquiry_form").validate({
        // custom handler to call named function ""
        submitHandler: function(form) {
            Layers.pages.submitCustomerForm(form);
        },

        // validate the previously selected element when the user clicks out
        onfocusout: function(element) {
            $(element).valid();
        },

        errorPlacement: function(error, element) {
        },

        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },

        // validation rules
        rules: {
            "inquiry[name]": { required: true },
            "inquiry[email]": { required: true, email: true }
        }
    });

    //*********************************************************************************************************
    //      DESIGNER FORM
    //*********************************************************************************************************

    $("#designer_inquiry_form").validate({

        // custom handler to call named function ""
        submitHandler: function(form) {
            Layers.pages.submitDesignerForm(form);
        },

        // validate the previously selected element when the user clicks out
        onfocusout: function(element) {
            $(element).valid();
        },

        errorPlacement: function(error, element) {
        },

        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },

        // validation rules
        rules: {
            "inquiry[name]": { required: true },
            "inquiry[email]": { required: true, email: true }
        }

    });

    //*********************************************************************************************************
    //      CONTACT FORM
    //*********************************************************************************************************

    $("#contact_inquiry_form").validate({

        // custom handler to call named function ""
        submitHandler: function(form) {
            Layers.pages.submitContactForm(form);
        },

        // validate the previously selected element when the user clicks out
        onfocusout: function(element) {
            $(element).valid();
        },

        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },

        // validation rules
        rules: {
            "inquiry[name]": { required: true },
            "inquiry[email]": { required: true, email: true },
            "inquiry[message]": { required: true }
        }

    });

});
