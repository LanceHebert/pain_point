class Api::ExercisesController < ApplicationController
    def index
        render json: Exercise.all
    end
    def show
        user = User.find_by(id: session[:user_id]).exercises
        render json: user, status: 201
    end
end
