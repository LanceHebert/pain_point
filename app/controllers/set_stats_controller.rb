class SetStatsController < ApplicationController
    def index
        render json: SetStat.all
    end


    def create
        user = User.find_by(id: session[:user_id])
        # Exercise find by (exercise name)
        # .sessions create! feed params
    end

    private
    def set_stats_params
        params.permit(:reps, :tband, :sets, :RPE)
    end
end
