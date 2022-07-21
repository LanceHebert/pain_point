class Api::SetStatsController < ApplicationController

        wrap_parameters format: []

    def index
        s=SetStat.all
        render json: s
    end


    def show
        user = User.find_by(id: session[:user_id])
        s=user.routines
        render json: s
    end


    def create            
        r=SetStat.create!(set_stats_params)
        render json:r, status: :created        
    end



    private
    def set_stats_params
        params.permit(:routine_id,:exercise_id,:reps, :tband, :sets, :RPE)
    end
end
