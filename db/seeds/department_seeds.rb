10.times do |department_number|
  department_name = "Department Number #{department_number}"
  Department.find_or_create_by!(name: department_name)
end