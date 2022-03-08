class MuscleGroupSerializer < ActiveModel::Serializer
  attributes :id, :region
  has_one :routines
end
