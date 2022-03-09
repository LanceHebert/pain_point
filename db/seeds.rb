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
s1=Routine.create!(user_id:u1.id,routine:1,date:Time.now.to_datetime,muscle_group_id:m1.id,pain:8)
s5=Routine.create!(user_id:u1.id,routine:2,date:Time.now.to_datetime,muscle_group_id:m1.id,pain:5)
s6=Routine.create!(user_id:u1.id,routine:2,date:Time.now.to_datetime,muscle_group_id:m2.id,pain:3)
s7=Routine.create!(user_id:u1.id,routine:2,date:Time.now.to_datetime,muscle_group_id:m3.id,pain:3)
s2=Routine.create!(user_id:u2.id,routine:1,date:Time.now.to_datetime,muscle_group_id:m2.id,pain:4)
s3=Routine.create!(user_id:u3.id,routine:1,date:Time.now.to_datetime,muscle_group_id:m3.id,pain:5)
s4=Routine.create!(user_id:u3.id,routine:2,date:Time.now.to_datetime,muscle_group_id:m3.id,pain:7)




puts "🦾 Get Sweaty... 🦾 "
e1=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"Sl19P-Xi2nY",advanced:false,name:"Chin Tucks",description:"Tuck chin down to neck",muscle_group_id:m1.id)
e2=Exercise.create!(recsets:3,recreps:20,videoEmbed:"Sl19P-Xi2nY",advanced:true,name:"Rows",description:"row back boy",muscle_group_id:m1.id)
e3=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"Sl19P-Xi2nY",advanced:false,name:"Levator Scapulae Stretch",description:"look down in pocket",muscle_group_id:m1.id)
e4=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"Sl19P-Xi2nY",advanced:false,name:"PNF pattern ",description:"Draw your sword",muscle_group_id:m2.id)
e5=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"Sl19P-Xi2nY",advanced:false,name:"internal shoulder rotation sidelying",description:"on side , raise wrist towards ceiling",muscle_group_id:m2.id)
e6=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"Sl19P-Xi2nY",advanced:false,name:"Bridges",description:"lay on your back and push pelvis to ceiling",muscle_group_id:m3.id)
e7=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"Sl19P-Xi2nY",advanced:false,name:"Bird Dogs",description:"hands and knees position, raise one arm up contralateral leg up at the same time maintaining core tight.",muscle_group_id:m3.id)
e8=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"Sl19P-Xi2nY",advanced:true,name:"I's, Y's , T's",description:"Begin with your feet supported against a wall and a Swiss Ball under the hips/stomach.Ts: arms are straight (thumbs pointing up); bring your shoulder blades together, keeping your neck in a neutral position.   
    Ws: elbows are bending out to the side, aiming your thumbs for into your armpits; shoulder blades are coming together and neck is staying neutral.    
    Ys: arms are straight; raise them out in front of you at an angle like you're making a big Y!",muscle_group_id:m2.id)
e9=Exercise.create!(recsets:3,stretch:false,recreps:3,videoEmbed:"Sl19P-Xi2nY",advanced:false,name:"UPPER TRAP STRETCH",description:"While sitting in a chair, hold the seat with one hand and place your other hand on your head to assist in bending your head to the side as shown.Bend your head towards the opposite side of the hand that is holding the chair seat. You should feel a stretch to the side of your neck. ",muscle_group_id:m1.id)

e10=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"Sl19P-Xi2nY",advanced:true,name:"Chin tuck with reverse fly",description:"Lying on your back, place a towel roll under the base of your head and hold a theraband with a straightened elbow.Perform a chin tuck and slowly pull your arms apart, squeezing your shoulder blades together. Slowly return to starting position.",muscle_group_id:m1.id)
e11=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"Sl19P-Xi2nY",advanced:true,name:"Chin tuck with reverse fly",description:"Lying on your back, place a towel roll under the base of your head and hold a theraband with a straightened elbow.Perform a chin tuck and slowly pull your arms apart, squeezing your shoulder blades together. Slowly return to starting position.",muscle_group_id:m4.id)
e12=Exercise.create!(recsets:3,stretch:false,recreps:3,videoEmbed:"Sl19P-Xi2nY",advanced:false,name:"UPPER TRAP STRETCH",description:"While sitting in a chair, hold the seat with one hand and place your other hand on your head to assist in bending your head to the side as shown.Bend your head towards the opposite side of the hand that is holding the chair seat. You should feel a stretch to the side of your neck. ",muscle_group_id:m4.id)
e12=Exercise.create!(recsets:3,stretch:false,recreps:3,videoEmbed:"Sl19P-Xi2nY",advanced:true,name:"BACK BREAKER",description:"While sitting in a chair, hold the seat with one hand and place your other hand on your head to assist in bending your head to the side as shown.Bend your head towards the opposite side of the hand that is holding the chair seat. You should feel a stretch to the side of your neck. ",muscle_group_id:m3.id)



puts "🥴 Now lets cooldown ....🥴"

SetStat.create!(routine_id:s1.id,exercise_id:e1.id,reps:10,tband:"Orange",sets:3,RPE:5) 
SetStat.create!(routine_id:s1.id,exercise_id:e2.id,reps:20,tband:"Blue",sets:3,RPE:4) 
SetStat.create!(routine_id:s1.id,exercise_id:e3.id,reps:20,tband:"red",sets:3,RPE:6) 
SetStat.create!(routine_id:s2.id,exercise_id:e8.id,reps:15,tband:"blue",sets:3,RPE:8) 
SetStat.create!(routine_id:s2.id,exercise_id:e9.id,reps:8,tband:"black",sets:2,RPE:8) 
SetStat.create!(routine_id:s2.id,exercise_id:e10.id,reps:10,tband:"red",sets:2,RPE:2) 
SetStat.create!(routine_id:s3.id,exercise_id:e6.id,reps:11,tband:"yellow",sets:2,RPE:2) 
SetStat.create!(routine_id:s3.id,exercise_id:e7.id,reps:12,tband:"yellow",sets:1,RPE:5) 
SetStat.create!(routine_id:s4.id,exercise_id:e6.id,reps:25,tband:"blue",sets:1,RPE:7) 
SetStat.create!(routine_id:s4.id,exercise_id:e7.id,reps:12,tband:"red",sets:3,RPE:6) 
SetStat.create!(routine_id:s5.id,exercise_id:e1.id,reps:13,tband:"yellow",sets:2,RPE:6) 
SetStat.create!(routine_id:s5.id,exercise_id:e2.id,reps:15,tband:"black",sets:3,RPE:8) 
SetStat.create!(routine_id:s5.id,exercise_id:e3.id,reps:20,tband:"black",sets:2,RPE:2) 
SetStat.create!(routine_id:s6.id,exercise_id:e2.id,reps:15,tband:"black",sets:3,RPE:8) 
SetStat.create!(routine_id:s7.id,exercise_id:e3.id,reps:20,tband:"black",sets:2,RPE:2) 
 

puts "🙏🙏Cooldown fully seeded!🙏🙏"





