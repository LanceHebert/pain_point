class MuscleGroup < ApplicationRecord
  has_many :routines
  has_many :exercises
end
