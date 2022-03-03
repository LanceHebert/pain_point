class SetStatSerializer < ActiveModel::Serializer
  attributes :id, :reps, :tband, :sets, :RPE
  # has_one :session
  # has_one :exercise
end
