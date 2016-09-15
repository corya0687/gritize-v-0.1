class ApplicationController < ActionController::Base
   
  respond_to :json

  before_action :configure_permitted_parameters, if: :devise_controller?


  def home
    render 'layouts/application'
  end

  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  end
end
