# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Notebook.destroy_all
Note.destroy_all

demo = User.create!(username: "demouser", password: "password")
arwen = User.create!(username: "miknewra", password: "password123")

notebook1 = Notebook.create!(
    title: 'Coding',
    user_id: demo.id,
)

note1 = Note.create!(
    title: 'My Fullstack Project',
    body: 'NeverEverNote for my first fullstack project is not easy',
    user_id: demo.id,
    notebook_id: notebook1.id
)



note2 = Note.create!(
    title: 'hello',
    body: 'hellohello',
    user_id: demo.id,
    notebook_id: notebook1.id
)