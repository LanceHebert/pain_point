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


puts "💪 Muscle group pump up...💪"
m1=MuscleGroup.create!(region:"neck")
m2=MuscleGroup.create!(region:"shoulder")
m3=MuscleGroup.create!(region:"back")
m4=MuscleGroup.create!(region:"knee")

puts "🤩Its session time!...🤩"
s1=Routine.create!(user_id:u1.id,routine:1,date:Time.now.to_datetime,muscle_group_id:m1.id,pain:10)
s2=Routine.create!(user_id:u1.id,routine:2,date:Time.now.to_datetime,muscle_group_id:m1.id,pain:9)
s3=Routine.create!(user_id:u1.id,routine:3,date:Time.now.to_datetime,muscle_group_id:m1.id,pain:5)
s4=Routine.create!(user_id:u1.id,routine:4,date:Time.now.to_datetime,muscle_group_id:m1.id,pain:1)
s5=Routine.create!(user_id:u1.id,routine:1,date:Time.now.to_datetime,muscle_group_id:m2.id,pain:10)
s6=Routine.create!(user_id:u1.id,routine:2,date:Time.now.to_datetime,muscle_group_id:m2.id,pain:8)
s7=Routine.create!(user_id:u1.id,routine:3,date:Time.now.to_datetime,muscle_group_id:m2.id,pain:6)





puts "🦾 Get Sweaty... 🦾 "
e1=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"gIBoxQ6AlS0",advanced:false,name:"Chin Tucks",description:"Place your hand on your chin and slowly draw your head back into a chin tuck so that your ears line up with your shoulders. Hold, then return to original position and repeat. ",muscle_group_id:m1.id)
e2=Exercise.create!(recsets:3,stretch: true,recreps:20,videoEmbed:"Sl19P-Xi2nY",advanced:false,name:"Levator Scapulae Stretch",description:"Tilt your head to the side, then rotate to the side, then tip downward as in looking at your opposite pocket. You should feel a gentle stretch at the side/back of your neck.  ",muscle_group_id:m1.id)
e3=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"z4jptepVuq4",advanced:false,name:"UPPER TRAP STRETCH",description:"While sitting in a chair, hold the seat with one hand and place your other hand on your head to assist in bending your head to the side as shown.Bend your head towards the opposite side of the hand that is holding the chair seat. You should feel a stretch to the side of your neck. ",muscle_group_id:m1.id)
e4=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"1UU4VvklQ44",advanced:false,name:"Wall Angels",description:"Stand with your back against a wall with arms raise to 90 degrees. 
    While making contact with your head, wrists, elbows and shoulders, slide your arms up and down the wall as shown. ",muscle_group_id:m1.id)
e5=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"09idm3kmgzU",advanced:true,name:"internal shoulder rotation sidelying",description:"Lying on your back, tuck your chin tightly towards your chest without lifting the back of your head from the pillow. Hold the tuck, and lift one arm above your head. Lower that arm, and while still holding the tuck, raise the other arm above your head.  Lower that arm and then release the chin tuck.  ",muscle_group_id:m1.id)
e6=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"HSRfN8xksZ0",advanced:true,name:"No Moneys",description:"Start with your elbows at your side, palm facing up. Squeeze your shoulder blades down and back opening your hands away from your body.",muscle_group_id:m1.id)
e7=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"A9TD09kzjGY",advanced:true,name:"WALL ANGELS",description:"Stand with your back against a wall with arms raise to 90 degrees. 
    While making contact with your head, wrists, elbows and shoulders, slide your arms up and down the wall as shown. ",muscle_group_id:m1.id)
e8=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"flW5Ju_B1zg",advanced:true,name:"Chin Tucks with theraband Use",description:"With a TheraBand wrapped around the back of your head perform a chin tuck. 
    Looking straight forward, push your chin backwards as if it were being pushed on a shelf or if someone with bad breath attempted to kiss you.
    Avoid looking downwards and causing an arch in the neck. ",muscle_group_id:m1.id)
e9=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"v5bPOsQbq7g",advanced:false,name:"SIDE LYING EXTERNAL ROTATION WITH TOWEL - ER",description:"Lie on your side with your elbow bent to 90 degrees. Place a rolled up towel between your arm and the side your body as shown. 

    Squeeze your shoulder blade back and down toward your buttocks and hold that position. 
    
    Next, roll your arm upwards from your stomach area towards the ceiling while maintaining your arm against the towel and with your shoulder blade held down and back the entire time. Lower your arm and repeat.",muscle_group_id:m2.id)

e10=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"IxLuC-Bw8T4",advanced:false,name:"CANE EXTERNAL ROTATION STRETCH - PILLOW",description:"Lie on your back with a pillow under your affect shoulder. Hold a cane or wand with both hands. 

    On the affected side, maintain a 90 degree bend at the elbow with your arm approximately 30-45 degrees away from your side. 
    
    Use your other arm to push the cane to rotate the affected arm into a stretch. Hold and then return to starting position and then repeat. ",muscle_group_id:m2.id)
e11=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"V3vaSCxv-tg",advanced:false,name:"PNF Pattern 1",description:"While standing, move your arm through a diagonal pattern sometimes described as D1 (diagonal 1) or Thumb in pie to feed the face.

The pattern should start with your arm by your side and thumb pointed behind your body and downward. Next, move your arm upwards and across your body so that the palm of your hand is pointed towards your mouth. 

Reverse to starting position and repeat.",muscle_group_id:m2.id)
e12=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"V3vaSCxv-tg",advanced:false,name:"PNF Pattern 2",description:"While standing, move your arm through a diagonal pattern sometimes described as D2 (diagonal 2) or Draw sword to hitch hiker thumb.

The pattern should start with your arm reaching toward your opposite pocket by your opposite hip with palm facing your opposite hip. Next, move your arm upwards and laterally across your body so that the palm of your hand is pointed upward towards the ceiling and thumb pointed behind your body.

Reverse to starting position and repeat.
",muscle_group_id:m2.id)
e13=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"HPPi3SceBm4",advanced:true,name:"Standing Shoulder Abduction",description:"With your affected arm starting at your side with your thumb pointed upward, raise up your arm to the side.  ",muscle_group_id:m2.id)
e14=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"NF1uwqc9VwU",advanced:true,name:"Shoulder Flexion",description:"
    Begin standing with arms by your side. Slowly bring arms forward to shoulder height. Hold at the top and then slowly lower arms back to starting position.  ",muscle_group_id:m2.id)
e15=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"7UGzYTf85e0",advanced:true,name:"External rotation with ball",description:"Lie on your side and throw a ball up in the air and catch it. Keep your elbow bent and rested on your side the entire time.   ",muscle_group_id:m2.id)
e16=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"wPM8icPu6H8",advanced:false,name:"Bridges",description:"While lying on your back with knees bent, tighten your lower abdominal muscles, squeeze your buttocks and then raise your buttocks off the floor/bed as creating a Bridge with your body. Hold and then lower yourself and repeat. ",muscle_group_id:m4.id)
e17=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"09YaaN9hG2I",advanced:false,name:"Clamshells",description:"While lying on your side with your knees bent, raise your top knee upwards while keeping your feet in contact the entire time. Lower back down and repeat.

    Do not let your pelvis roll back during the lifting movement.   ",muscle_group_id:m4.id)
e18=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"bQ4YHTCGKaM",advanced:false,name:"Adduction leg lift",description:"Press L knee into chair to activate L adductor (inner thigh). 

Exhale; as you lift the bottom R leg, lift the L arm upward toward the ceiling to engage the L obliques. 
Inhale; lower and relax. 

Repeat. ",muscle_group_id:m4.id)
e19=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"gNS_QjGAs_k",advanced:false,name:"Anterior Tibialis raise",description:"Start with your back on a wall/door and feet away from the wall. Keeping your knees straight raise your toes off the ground towards the ceiling.  ",muscle_group_id:m4.id)
e20=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"n4CYxMr_D6s",advanced:true,name:"Bridge Single Leg",description:"While lying on your back with your feet planted on top of the Bosu and knees bent, lift up your buttocks and then straighten one knee in the air as shown. 

    Next, perform on the other leg.   ",muscle_group_id:m4.id)
e21=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"jgh6sGwtTwk",advanced:true,name:"Sidelying Leg lift",description:"Lie on your side with your hips slightly flexed so that your legs are in a pike position. Make sure that your shoulders and hips are stacked on top of each other. Lift your top leg while keeping your shoulders and hips stacked. Lower the leg to the starting position.",muscle_group_id:m4.id)
e22=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"eFxnmgRTuAM",advanced:true,name:"Anterior tibialis raise with theraband",description:"Sitting on the floor place a band around the ankle securing the free end on a sturdy surface. 

    With a good amount of tension on the band bring your toes toward your face. Relax and repeat. ",muscle_group_id:m4.id)
e23=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"ka3bQI2-3D0",advanced:true,name:"Clamshell Progression",description:"Lay on your side with your knees and feet stacked on top of each other, knees bent to your chest. Place your upper back, buttocks, and your heels against a wall to keep your back straight. Tighten your abdominals by doing a small crunch and maintain this crunch throughout the exercise while continuing to breathe normally. 

    Lift the top leg off the bottom leg and hold this position as you rotate your foot upwards  towards the ceiling while keeping your knee still then bring your leg back down to neutral. 
    
    Perform on left and right",muscle_group_id:m4.id)
e24=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"VgJtviOZMTg",advanced:false,name:"Transverse Abdominis",description:"In sitting or laying down. Place your hands on your abdomen. Slowly inhale into your ribs. As you exhale, gently pull your belly button towards your spine. Hold that position for a cycle of 5-10 breaths. Slowly let the belly rise on the inhale after this cycle. Use your hands for feedback. If you feel muscles bulge up you are engaging your superficial muscles and this is incorrect.  ",muscle_group_id:m3.id)
e25=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"0Capu4Fv8xQ",advanced:false,name:"Bent knee fall out",description:"Laying on your back with both knees bent place your hands on the front of your pelvis.  As you let the knee fall out to the side monitor the opposite side of the pelvis making sure to keep the pelvis and lumbar spine neutral.

    As you move the right leg out then the left side of the pelvis will lift up use the core to prevent the pelvis from rotating.  This is not a stretch it is a motor control exercise.",muscle_group_id:m3.id)
e26=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"EEtd0uY-bMw",advanced:false,name:"Bridges",description:"While lying on your back with knees bent, tighten your lower abdominal muscles, squeeze your buttocks and then raise your buttocks off the floor/bed as creating a Bridge with your body. Hold and then lower yourself and repeat. ",muscle_group_id:m3.id)
e27=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"wiFNA3sqjCA",advanced:false,name:"Bird dogs",description:"
    While on hands and knees (quadruped) engage your core.  With core engaged and keeping hips level extend on leg straight back as shown in picture.  Hold leg out straight for 3 seconds and return to quadruped position.  Repeat the exercise on the opposite leg.  ",muscle_group_id:m3.id)
e28=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"4XLEnwUr1d8",advanced:true,name:"Dead Bugs",description:"
    Start: Lay on your back as pictured, perform a pelvic tilt by flattening your back onto the floor while bracing your core.
    
    Movement: Begin  by cycling your legs as you move your arms while your maintain your pelvic tilt.
    
    *Note-The second your back begins to arch, you have lost your pelvic tilt and should stop and rest.",muscle_group_id:m3.id)
    e29=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"AVAXhy6pl7o",advanced:true,name:"Single Leg Bridge",description:"While lying on your back with your knees bent, extend one knee as shown. 

        Next, raise your buttocks off the floor/bed.  
        
        Try and maintain your pelvis level the entire time. ",muscle_group_id:m3.id)
e30=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"VIbtib4LLfc",advanced:true,name:"Bird dog with theraband",description:"Start in a crawl position with the center loops of the CLX on each foot with one loop separation. Attach the end loops to each hand as shown. 

    While maintaining a straight spine in neutral position, straighten out one leg behind you as you raise your opposite arm over head. Return to starting position and then repeat on the other side.  ",muscle_group_id:m3.id)
    
e31=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"YaXPRqUwItQ",advanced:true,name:"Squat",description:"Stand with feet shoulder width apart and toes pointed forward to slightly turned out. Bend knees and lower buttock towards floor keeping your back straight and bending at your hips. Allow your arms to raise up forward as you lower down and then return arms to side as you straight back up.

    Your buttock should lower behind your feet as if you are going to sit on a chair. Emphasize your weight going through your heels. 
    
    For good knee alignment, do not let your knees pass in front of your toes and keep your knee in line with your 2nd toe (next to the big toe) as it bends.
    
     ",muscle_group_id:m3.id)
     e32=Exercise.create!(recsets:3,stretch:false,recreps:20,videoEmbed:"n4CYxMr_D6s&t=87s",advanced:true,name:"PNF with theraband",description:"
        Standing with the band anchored under 1 foot and grasping the other end of the band at the office in hand in the thumb down position and all the slack taken out of the band. Lift your arm out to the side and over your head while rotating your head and trunk in that direction. Return to the beginning position ",muscle_group_id:m2.id)



puts "🥴 Now lets cooldown ....🥴"

SetStat.create!(routine_id:s1.id,exercise_id:e1.id,reps:10,tband:"Orange",sets:3,RPE:5) 
SetStat.create!(routine_id:s1.id,exercise_id:e2.id,reps:20,tband:"Blue",sets:3,RPE:4) 
SetStat.create!(routine_id:s1.id,exercise_id:e3.id,reps:20,tband:"red",sets:3,RPE:6) 
SetStat.create!(routine_id:s1.id,exercise_id:e4.id,reps:15,tband:"blue",sets:3,RPE:8) 
SetStat.create!(routine_id:s2.id,exercise_id:e5.id,reps:8,tband:"black",sets:2,RPE:8) 
SetStat.create!(routine_id:s2.id,exercise_id:e6.id,reps:10,tband:"red",sets:2,RPE:2) 
SetStat.create!(routine_id:s2.id,exercise_id:e7.id,reps:11,tband:"yellow",sets:2,RPE:2) 
SetStat.create!(routine_id:s2.id,exercise_id:e8.id,reps:12,tband:"yellow",sets:1,RPE:5) 
SetStat.create!(routine_id:s3.id,exercise_id:e6.id,reps:25,tband:"blue",sets:1,RPE:7) 
SetStat.create!(routine_id:s3.id,exercise_id:e7.id,reps:12,tband:"red",sets:3,RPE:6) 
SetStat.create!(routine_id:s3.id,exercise_id:e8.id,reps:13,tband:"yellow",sets:2,RPE:6) 
SetStat.create!(routine_id:s4.id,exercise_id:e1.id,reps:15,tband:"black",sets:3,RPE:8) 
SetStat.create!(routine_id:s4.id,exercise_id:e2.id,reps:20,tband:"black",sets:2,RPE:2) 
SetStat.create!(routine_id:s4.id,exercise_id:e3.id,reps:15,tband:"black",sets:3,RPE:8) 
SetStat.create!(routine_id:s4.id,exercise_id:e4.id,reps:20,tband:"black",sets:2,RPE:2)
SetStat.create!(routine_id:s5.id,exercise_id:e4.id,reps:20,tband:"black",sets:2,RPE:2)
SetStat.create!(routine_id:s6.id,exercise_id:e4.id,reps:20,tband:"black",sets:2,RPE:2)
SetStat.create!(routine_id:s7.id,exercise_id:e4.id,reps:20,tband:"black",sets:2,RPE:2) 
 

puts "🙏🙏Cooldown fully seeded!🙏🙏"





