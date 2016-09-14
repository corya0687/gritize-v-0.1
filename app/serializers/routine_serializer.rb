class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :user_id, :end_date
end
