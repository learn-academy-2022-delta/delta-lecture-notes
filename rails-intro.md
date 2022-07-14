# Intro to Rails
  - Ruby on Rails is an open source framework written in the language Ruby
  - MVC: Model, View, Controller
    - View: HTML, CSS, Javascript, React
    - Model: The database layer
    - Controllers: Dictates the data in where it is going

  ## Creating a Rails App
   Check Rails version

`$ rails -v` > Rails 7.0.3.1

`$ rails new my_app -d postgresql -T`

# Create a Databse on Local
`$ rails db:create`
Created database 'my_app_development'
Created database 'my_app_test'

`$ psql`

# Running Server
`$ rails s `