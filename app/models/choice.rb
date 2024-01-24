class Choice < ApplicationRecord
  belongs_to :location, dependent: :destroy
  validates :choice_name, presence: true
end
