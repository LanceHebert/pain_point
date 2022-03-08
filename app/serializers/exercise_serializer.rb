class ExerciseSerializer < ActiveModel::Serializer
  attributes :id,:muscle_group_id, :name, :description, :videoEmbed, :advanced,:recreps,:recsets
  has_one :muscle_group
  has_many :set_stats
  has_many :routines
end
