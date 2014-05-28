class AdminMailer < ActionMailer::Base
    add_template_helper(ApplicationHelper)

    default from: "43Layers Admin <contact@43layers.com>"

    def inquiry_notification(inquiry)
        @inquiry = inquiry
        mail to: Rails.configuration.admin_email, subject: "New #{@inquiry.source} inquiry: #{@inquiry.email}"
    end
end
