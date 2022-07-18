## RAILS ASSOCIATIONS

# Core Concepts
- Relationships between tables
- has_many belongs_to
- Every table has a primate key - id:numbers
- Foreign key - reference to another table's primary key

# Setup
- rails new associations -d postgresql -T
- rails db:create

# Databases
- rails g model Cohort name:string year:string
- rails g model Student name:string cohort_id:integer


# Model Classes
- app/models/cohort.rb

```
- app/models/student.rb



# Added Cohorts
- rails c
- Cohort.create(name: 'Delta', year: '2022')
- Cohort.create(name: 'Bravo', year: '2022')

# Add Students
- Identify a cohort: delta = Cohort.find(1)
  OR
- delta = Cohort.where(name: 'Delta').first

- delta.students.create(name: 'Will')
