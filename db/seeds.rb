# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.create!(title: "R&B Yoga Playground", event_description:"R&B Yoga practice to improve mobility for all bodies", price:25, category:"wellness", location:"1201 K Street NW, Washington, DC 20005", organizer:"Eaton DC", date:"April 26, 2023")
Event.create!(title: "Painting Class", event_description:"Fun beginner painting class", price:15, category:"art", location:"87 Paint St", organizer:"Paint Me", date:"June 7, 2023")

User.create!(username: "MJ1", password_digest: "mj1", full_name: "Milly James", age:29, email:"mj@gmail.com")
User.create!(username: "KH2", password_digest: "kh2", full_name: "Kalie Henry", age:42, email:"kh@gmail.com")

Review.create!(user_id:1, event_id:1, recommend:true, summary:"relaxing time")
Review.create!(user_id:2, event_id:2, recommend:false, summary:"directions were too fast")
Review.create!(user_id:1, event_id:2, recommend:true, summary:"great fun!")
