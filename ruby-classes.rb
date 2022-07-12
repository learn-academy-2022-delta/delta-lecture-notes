# Ruby Classes and Objects 7/12/2022


# p true.class
# => TrueClass
# p 1.class
# => Integer
# p 5.0.class
# => Float

# PascalCase
# class Hulu
#   def set_show_data(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
# end

# p Hulu.new
#<Hulu:0x0000000129034128>
# p Hulu.new
#<Hulu:0x000000015a8fbd20>
# .new will create a unique object from the class

# greenleaf = Hulu.new
# p greenleaf
#<Hulu:0x0000000136877ee0>

# p greenleaf.set_show_data('Greenleaf')
# => "Greenleaf"
#<Hulu:0x000000013103afe8 @title="Greenleaf">

# p greenleaf.set_show_data('Greenleaf', '45min')
# p greenleaf
#<Hulu:0x000000011f091288 @title="Greenleaf", @run_time="45min">

# Need to give our class something to do:
# getting (seeing data) and setting (creating data)
# @ - instance variable, a variable that belongs to the class
# Helpful error message: wrong number of arguments (given 1, expected 2) (ArgumentError)
	# from ruby-classes.rb:29 - tells me the line number and tells me the specific error


# class Hulu
#   # setter method:
#   def set_show_data(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
#   # getter methods:
#   def get_show_data
#     "The show #{@title} is #{@run_time} long."
#   end
#   def title
#     @title
#   end
#   def run_time
#     @run_time
#   end
# end

# greenleaf = Hulu.new
# greenleaf.set_show_data('Greenleaf', '45min')
# p greenleaf.run_time

# letterKenny = Hulu.new
# letterKenny.set_show_data('Letter Kenny', '30min')
# p letterKenny.title
# => "Letter Kenny" (works once we define a getter method)
# p letterKenny.get_show_data
# => "The show Letter Kenny is 30min long."



# class Hulu
#   # initalize a recognized method in Ruby
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @genre = "drama"
#   end
#   def get_show_data
#     "The show #{@title} is #{@run_time} long."
#   end
#   def title
#     @title
#   end
#   def run_time
#     @run_time
#   end
#   def set_genre(genre)
#     @genre = genre
#   end
# end

# .new runs the initialize method
# greenleaf = Hulu.new('Greenleaf', '45min')
# p greenleaf.get_show_data

# letterKenny = Hulu.new('Letter Kenny', '30min')
# p letterKenny
# letterKenny.set_genre('comedy')
# p letterKenny


class Hulu
  # attribute accessor, helper method
  # : -> "the thing named..."
  attr_accessor :title, :run_time, :genre
  # initalize a recognized method in Ruby
  def initialize(title, run_time)
    @title = title
    @run_time = run_time
    @genre = "drama"
  end
  def get_show_data
    "The show #{@title} is #{@run_time} long."
  end
end

greenleaf = Hulu.new('Greenleaf', '45min')
p greenleaf.title
greenleaf.title = 'GREENLEAF'
p greenleaf.title

letterKenny = Hulu.new('Letter Kenny', '30min')
p letterKenny
letterKenny.genre = 'comedy'
p letterKenny
