class SubroutineSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :routine_id, :deadline, :completed
end
