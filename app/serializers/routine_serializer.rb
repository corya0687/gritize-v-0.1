class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :description, :user_id, :end_date
end
