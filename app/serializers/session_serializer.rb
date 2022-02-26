class SessionSerializer < ActiveModel::Serializer
  attributes :id, :session,:date
  has_one :user
end
