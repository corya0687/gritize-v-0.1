class UserSerializer < ActiveModel::Serializer
  attributes :id, :routines, :username, :email
end
