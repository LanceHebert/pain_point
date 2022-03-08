class Routine < ApplicationRecord
  belongs_to :user
  belongs_to :muscle_group
  has_many :set_stats
  has_many :exercises,through: :set_stats
end
