class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :date, :routine
  
  has_one :muscle_group
end
