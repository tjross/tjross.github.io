Layers::Application.routes.draw do

    root 'pages#home'

    post 'ajax/inquiry', to: 'pages#ajax_inquiry', as: :ajax_inquiry

end
