FactoryBot.define do
  factory :promotion do
    sequence(:code) { |n| "Promotion ##{n}" }
    sequence(:discount) { |n| n % 100 }
    active { true }

    trait :deactivated do
      active { false }
    end
  end
end