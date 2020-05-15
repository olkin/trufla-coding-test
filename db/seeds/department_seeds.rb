10.times do
  Department.find_or_create_by!(name: Faker::Commerce.department)
end