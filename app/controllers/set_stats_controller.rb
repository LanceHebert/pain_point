class SetStatsController < ApplicationController
    def index
        render json: SetStat.all
    end
end
