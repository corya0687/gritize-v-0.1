class Routine < ApplicationRecord
  has_many :routine_tags
  has_many :tags, through: :routine_tags
end
