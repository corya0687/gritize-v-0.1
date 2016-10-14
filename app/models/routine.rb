class Routine < ApplicationRecord
  has_many :routine_tags
  has_many :tags, through: :routine_tags
  has_many :subroutines

  def date_format
    a = self.end_date.strftime("%Y-%m-%d").to_date
  end
end
