class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :user_id, :start_date, :end_date, :date_format, :subroutines
end
