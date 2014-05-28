class PagesController < ApplicationController

    def home
    end

    def ajax_inquiry
        render text: 'failure' and return if params[:inquiry].blank?

        inquiry = Inquiry.new(inquiry_params)

        if inquiry.save
            render text: 'success'
        else
            render text: 'failure'
        end

    end

    private

    def inquiry_params
        params.require(:inquiry).permit :name, :email, :message, :source
    end

end
