class Routine < ApplicationRecord
  has_many :routine_tags
  has_many :tags, through: :routine_tags
  has_many :subroutines

  def date_format
    self.end_date.strftime("%m/%m/%Y")
  end
end
