class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :date, :routine,:pain
  has_many :exercises
  has_many :set_stats
  has_one :muscle_group
end
