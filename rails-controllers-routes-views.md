# Rails Controllers Routes and Views

MVC - Model, View, Controller

Views - What is seen by our user
Controllers - Coordinates the interaction between the user, the views, and the model
Routes - How our user gets somewhere to see what they want to see

# Controller
- Logical center of application.  
- Is a class that has multiple methods called by the route

URL - Uniform Resource Locator

The flow is: Route calls the controller method --> controller method pulls the correct data --> displays the correct view

# Setup

$ rails new routes_controllers_views_ -d postgresql -T
$ rails g controller Home


# Controllers
app/controllers/home_controller.rb
```ruby
class HomeController < ApplicationController
  def greeter
    render html: 'Hi!'
  end

  def joke
    render html: 'Two SQL tables are sitting at a bar.  A query walks in and asks, may I join you?'
  end

  def delta_cohort
    @delta = "The amazing people of Delta 2022!"
    @students = ["Ahmed", "Alex", "Alvin", "Corey", "Gene", "James", "Jojo", "Leo", "Luis", "Nicole", "Pua", "Ricky", "Samuel", "Sean", "Steven", "Venessa", "Will", "William"]
  end

  def landing
  end
end

```

# Routes
config/routes.rb
```ruby
Rails.application.routes.draw do
  # HTTP verb, url (location), hashrocket, controller, controller-method
  get '/greeter' => 'home#greeter'
  get '/joke' => 'home#joke'
  get '/delta' => 'home#delta_cohort'
  get '/landing' => 'home#landing'
  root to: 'home#landing'
end
```


# Views
app/views/home/delta_cohort.html.erb
```html
<h1>Hello!</h1>

<h2>Delta is a pretty awesome group!</h2>

<%= @delta %>
<ul>
  <% @students.each do |student|%>
    <li><%= student %></li>
  <% end %>
</ul>
```

app/views/home/landing.html.erb
```html
<h1>Welcome to this App!</h1>

<%= link_to 'Greeter', '/greeter' %>
<br/>
<%= link_to 'Joke', '/joke' %>
<br/>
<%= link_to 'Delta Cohort', '/delta' %>
```