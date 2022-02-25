# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "🌱 Seeding Protocol Initialized. 🌱"

puts "💻 Generating User(s)... 💻"
u1 = User.create!(username: 'user1', password: '1')
u2 = User.create!(username: 'user2', password: '1')
u3 = User.create!(username: 'user3', password: '1')

puts "💪 Muscle group pump up...💪"
m1=MuscleGroup.create!(region:"neck")
m2=MuscleGroup.create!(region:"shoulder")
m3=MuscleGroup.create!(region:"back")
m4=MuscleGroup.create!(region:"knee")

puts "🤩Its session time!...🤩"
s1=Session.create!(user_id:u1.id,session:1,date:Time.now.to_datetime,muscle_group_id:m1.id)
s5=Session.create!(user_id:u1.id,session:2,date:Time.now.to_datetime,muscle_group_id:m1.id)
s2=Session.create!(user_id:u2.id,session:1,date:Time.now.to_datetime,muscle_group_id:m2.id)
s3=Session.create!(user_id:u3.id,session:1,date:Time.now.to_datetime,muscle_group_id:m3.id)
s4=Session.create!(user_id:u3.id,session:2,date:Time.now.to_datetime,muscle_group_id:m3.id)


puts "🦾 Get Sweaty... 🦾 "
e1=Exercise.create!(name:"Chin Tucks",description:"Tuck chin down to neck",muscle_group_id:m1.id)
e2=Exercise.create!(name:"Rows",description:"row back boy",muscle_group_id:m1.id)
e3=Exercise.create!(name:"Levator Scapulae Stretch",description:"look down in pocket",muscle_group_id:m1.id)
e4=Exercise.create!(name:"PNF pattern ",description:"Draw your sword",muscle_group_id:m2.id)
e5=Exercise.create!(name:"internal shoulder rotation sidelying",description:"on side , raise wrist towards ceiling",muscle_group_id:m2.id)
e6=Exercise.create!(name:"Bridges",description:"lay on your back and push pelvis to ceiling",muscle_group_id:m3.id)
e7=Exercise.create!(name:"Bird Dogs",description:"hands and knees position, raise one arm up contralateral leg up at the same time maintaining core tight.",muscle_group_id:m3.id)


puts "🥴 Now lets cooldown ....🥴"

SetStat.create!(session_id:s1.id,exercise_id:e1.id,reps:10,tband:"Orange",sets:3,RPE:5) 
SetStat.create!(session_id:s1.id,exercise_id:e2.id,reps:20,tband:"Blue",sets:3,RPE:4) 
SetStat.create!(session_id:s1.id,exercise_id:e3.id,reps:20,tband:"red",sets:3,RPE:6) 
SetStat.create!(session_id:s2.id,exercise_id:e4.id,reps:15,tband:"blue",sets:3,RPE:8) 
SetStat.create!(session_id:s2.id,exercise_id:e5.id,reps:8,tband:"black",sets:2,RPE:8) 
SetStat.create!(session_id:s2.id,exercise_id:e1.id,reps:10,tband:"red",sets:2,RPE:2) 
SetStat.create!(session_id:s3.id,exercise_id:e6.id,reps:11,tband:"yellow",sets:2,RPE:2) 
SetStat.create!(session_id:s3.id,exercise_id:e7.id,reps:12,tband:"yellow",sets:1,RPE:5) 
SetStat.create!(session_id:s4.id,exercise_id:e6.id,reps:25,tband:"blue",sets:1,RPE:7) 
SetStat.create!(session_id:s4.id,exercise_id:e7.id,reps:12,tband:"red",sets:3,RPE:6) 
SetStat.create!(session_id:s5.id,exercise_id:e1.id,reps:13,tband:"yellow",sets:2,RPE:6) 
SetStat.create!(session_id:s5.id,exercise_id:e2.id,reps:15,tband:"black",sets:3,RPE:8) 
SetStat.create!(session_id:s5.id,exercise_id:e3.id,reps:20,tband:"black",sets:2,RPE:2) 

puts "🙏🙏Cooldown fully seeded!🙏🙏"





