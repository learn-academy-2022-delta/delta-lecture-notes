# Active Record
Active Record is a gem and is an ORM (object relational mapping) or a translator

Databases are like a storage room, the tables are like filing cabinets in the storage room, and classes and objects are like a labels to organize where things are stored

During development - Your database lives on your machine
Rails app - collection of folders and files that can be accesed on GitHub
During production - Database will exist on a seperate server

MVC - Model View Controller

Model is the class that defines the structure of the database

# Generate Command
ALL MODELS SHOULD BE IN PASCAL CASE AND SINGULAR

`$ rails generate model Schedule day:string date:date event:string`
      invoke  active_record
      create    db/migrate/20220714231457_create_schedules.rb
      create    app/models/schedule.rb

`$ rails db:migrate`

# Interacting with Data
rails c

> Schedule.all
> Schedule.create(day: 'Thursday', date: '2022-07-14', event: 'Office hours')
> Schedule.create(day: 'Thursday', date: '2022-07-14', event: 'White boarding')
> Schedule.create(day: 'Friday', date: '2022-07-15', event: 'Week 5 assessments')

# CRUD
Create - used the create method and passed key value pairs
Read
  - .all method returns all instances in db
  - .first
  - .second
  - .last
  - .find(2) returns an instance based on the primary key
  - .where(event: 'Office hours')


Update - We need to know the single instance we want to update
> assessments = Schedule.last
> assessments.update(event: 'Assessment')
> assessments

Delete 
> assessments = Schedule.last
> assessments.destroy

    - Make sure to document your process.  All variables will disappear once you exit out of rails console.