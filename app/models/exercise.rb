class Exercise < ApplicationRecord
  belongs_to :muscle_group
  has_many :set_stats
  has_many :sessions,through: :set_stats
end
