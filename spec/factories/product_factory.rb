FactoryBot.define do
  factory :product do
    sequence(:name) { |n| "ProductRow ##{n}" }
    sequence(:price) { |n| n/100 }
    department
  end
end