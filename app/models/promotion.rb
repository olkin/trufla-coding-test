class Promotion < ApplicationRecord
  validates :discount, numericality: { greater_than: 0, less_than_or_equal_to: 100 }
  validates :code, presence: true
end