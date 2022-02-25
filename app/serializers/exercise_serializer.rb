class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_one :muscle_group
end
