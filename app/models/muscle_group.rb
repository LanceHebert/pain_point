class MuscleGroup < ApplicationRecord
  has_many :sessions
  has_many :exercises
end
