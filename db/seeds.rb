100.times do
  title = Faker::DumbAndDumber.quote
  body = Faker::Hipster.paragraphs
  Post.create(title: title, body: body, )
end

puts '100 posts generated'