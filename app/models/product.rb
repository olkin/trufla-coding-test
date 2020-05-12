class Product < ApplicationRecord
  validates :name, presence: true
  validates :price, numericality: { greater_than_or_equal_to: 0 }, allow_blank: true

  belongs_to :department

  # maybe 1 product can have only 1 promotion? I'm not sure from data provided
  has_and_belongs_to_many :promotions
  has_and_belongs_to_many :active_promotions, -> { active }, class_name: 'Promotion'
end