class SessionSerializer < ActiveModel::Serializer
  attributes :id, :session
  has_one :user
end
