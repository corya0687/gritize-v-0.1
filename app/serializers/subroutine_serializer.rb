class SubroutineSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :routine_id, :end_date, :completed
end
