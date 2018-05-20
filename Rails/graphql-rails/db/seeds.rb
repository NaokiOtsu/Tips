# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: 'Naoki', email: 'n.otsu1029@gmail.com')
Address.create(postal_code: 8191139, address: '福岡県糸島市前原南2-9-14')
Post.create(subject: 'タイトルー1')
Post.create(subject: 'タイトルー2')
Post.create(subject: 'タイトルー3')
