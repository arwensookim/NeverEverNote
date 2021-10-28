# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Note.destroy_all
Notebook.destroy_all


demo = User.create!(username: "demouser", password: "password")
arwen = User.create!(username: "miknewra", password: "password123")

notebook1 = Notebook.create!(
    title: 'Diary',
    user_id: demo.id,
)


notebook2 = Notebook.create!(
    title: 'Test Notebook',
    user_id: demo.id,
)


note1 = Note.create!(
    title:'September, 27th',
    body:'Start my first Fullstack Project to cloning Evernote!',
    user_id: demo.id,
    notebook_id: notebook1.id
)

note2 = Note.create!(
    title:'October, 7th',
    body:'Finished most of the MVPs for the projects.',
    user_id: demo.id,
    notebook_id: notebook1.id
)


note3 = Note.create!(
    title:'Test Note',
    body:'This is Test Note',
    user_id: demo.id,
    notebook_id: notebook2.id
)

note4 = Note.create!(
    title:'Test Note 2',
    body:'This is another test note',
    user_id: demo.id,
    notebook_id: notebook2.id
)

note5 = Note.create!(
    title:'What is my favorite Programming Language?',
    body:'Ruby, Javascript is my favorite Programming Languages',
    user_id: demo.id,
    notebook_id: notebook2.id
)

note6 = Note.create!(
    title: 'functional component',
    body: 'I am still not used to using functional component',
    user_id: demo.id,
    notebook_id: notebook2.id
)
