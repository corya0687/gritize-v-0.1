class Tag < ApplicationRecord
  has_many :routine_tags
  has_many :routines, through: :routine_tags
end
