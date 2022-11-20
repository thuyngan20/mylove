class UsersController < ApplicationController
    def index
        @users = User.all
    end

    def edit
    end

    def update

    end

    def new
    end

    private
    def set_user
        @user = Profile.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
    def user_params
        params.require(:user).permit(:name, :email)
    end
end
