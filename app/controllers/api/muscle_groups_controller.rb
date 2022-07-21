class Api::MuscleGroupsController < ApplicationController
    def index
        render json: MuscleGroup.all
    end
end


# Information wanted: All set stats progression over time ,