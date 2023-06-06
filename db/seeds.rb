# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.create(title: "Google Sandbox", event_description:"Google Sandbox is a program series designed for industry professionals to explore career opportunities while gaining deeper insight into Google's technology, business, and culture", price:0, location:"25 Massachusetts Ave NW Washington DC 20001", organizer:"Google", date:"June 16, 2022")
Event.create(title: "Microsoft Build", event_description:"Microsoft Build is an annual conference hosted by Microsoft that brings together developers, engineers, and tech enthusiasts from around the world. The event showcases the latest advancements and updates in Microsoft technologies, platforms, and tools.", price:15, location:"Online", organizer:"Microsoft", date:"May 23, 2023")
Event.create(title: "RenderATL", event_description:"RenderATL is the four-day software engineering conference & music festival featuring your next career opportunity with 50+ expert speakers in tech covering upcoming and current best software engineering practices, web3, engineering leadership, accessibility practices, and more.", price:200, location:" 230 John Portman Blvd NW Building 2, Atlanta, GA 30303", organizer:"RenderATL", date:"May 31, 2023")

User.create(username: "MJ1", password_digest: "mj1", full_name: "Milly James", age:29, email:"mj@gmail.com")
User.create(username: "KH2", password_digest: "kh2", full_name: "Kalie Henry", age:42, email:"kh@gmail.com")
User.create(username: "fph", password_digest: "fph", full_name: "Faith Holmes", age:28, email:"fph@gmail.com")
User.create(username: "techone", password_digest: "tech", full_name: "Jake Banks", age:98, email:"tone@gmail.com")

Review.create(user_id:1, event_id:1, summary:"I learned about what life is like as a developer in Google and the current initiatives")
Review.create(user_id:2, event_id:2, summary:"directions were too fast")
Review.create(user_id:3, event_id:3, summary:"I learned how to network in the developer world")
