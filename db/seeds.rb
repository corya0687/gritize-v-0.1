# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ro = Routine.create(name:"Afternoon Nap", description:"Nap on lunchbreak", end_date: '2016-08-10')
ro.tags.create(name:"sleep")
ro.tags.create(name:"re-energize")

run = Routine.create(name:"Daily Run", description:"Run every day at 6", end_date: '2016-09-23')
run.tags.create(name:"fitness")


re = Routine.create(name:"Read", description:"Read something new", end_date: '2016-12-25')
re.tags.create(name:"Education")
re.tags.create(name:"knowledge")
re.save
