# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_02_24_002550) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exercises", force: :cascade do |t|
    t.bigint "muscle_group_id", null: false
    t.string "name"
    t.string "description"
    t.string "videoEmbed"
    t.boolean "advanced"
    t.integer "recreps"
    t.integer "recsets"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["muscle_group_id"], name: "index_exercises_on_muscle_group_id"
  end

  create_table "muscle_groups", force: :cascade do |t|
    t.string "region"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sessions", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "muscle_group_id"
    t.date "date"
    t.integer "session"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["muscle_group_id"], name: "index_sessions_on_muscle_group_id"
    t.index ["user_id"], name: "index_sessions_on_user_id"
  end

  create_table "set_stats", force: :cascade do |t|
    t.bigint "session_id", null: false
    t.bigint "exercise_id", null: false
    t.integer "reps"
    t.string "tband"
    t.integer "sets"
    t.integer "RPE"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["exercise_id"], name: "index_set_stats_on_exercise_id"
    t.index ["session_id"], name: "index_set_stats_on_session_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "exercises", "muscle_groups"
  add_foreign_key "set_stats", "exercises"
  add_foreign_key "set_stats", "sessions"
end
