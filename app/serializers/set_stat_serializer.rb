class SetStatSerializer < ActiveModel::Serializer
  attributes :id, :reps, :tband, :sets, :RPE
  has_one :routine
  has_one :exercise
  
end
