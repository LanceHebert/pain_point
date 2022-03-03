class SetStatsController < ApplicationController
    def index
        render json: SetStat.all
    end


    def create
        
        routine = Routine.create!()
        r=SetStat.create!(set_stats_params)
        render json:r, status: :created
        
    end

    private
    def set_stats_params
        params.permit(:routine_id,:exercise_id,:reps, :tband, :sets, :RPE)
    end
end
