class Choice < ApplicationRecord
  belongs_to :location, dependent: :destroy
end
