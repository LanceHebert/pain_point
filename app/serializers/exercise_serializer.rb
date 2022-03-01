class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :videoEmbed, :advanced,:recreps,:recsets
  has_one :muscle_group
end
