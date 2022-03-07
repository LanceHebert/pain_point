class RoutinesController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id]).routines
        render json: user, status: 201
    end

    def create
        user = User.find_by(id: session[:user_id])
        r = user.routines.create!(routine_params)
        render json: r, status: 201
    end

    def show
        user = User.find_by(id: session[:user_id])
        r= user.routines.where(muscle_group:MuscleGroup.where(region:params[:id]))
        render json:r
    end

    private

    def routine_params
        params.permit(:date, :routine,:pain,:muscle_group_id)
    end
end
