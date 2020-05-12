FactoryBot.define do
  factory :product do
    sequence(:name) { |n| "Product ##{n}" }
    sequence(:price) { |n| n/100 }
    department
  end
end