class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :videoURL, :advanced
  has_one :muscle_group
end
