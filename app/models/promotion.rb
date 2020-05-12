class Promotion < ApplicationRecord
  validates :discount, numericality: { greater_than: 0, less_than_or_equal_to: 100 }
  validates :code, presence: true

  has_and_belongs_to_many :products

  scope :active, -> { where active: true }
  scope :deactivated, -> { where.not(active: true) }
end