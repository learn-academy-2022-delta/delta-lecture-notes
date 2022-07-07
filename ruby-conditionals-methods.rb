# Ruby Methods and Conditionals

# Ruby Methods
  # First we need to define method
    # 'def' is a keyword for define
    # give name to method
    # end the method with keyword 'end'

def greeter
  'Hello world!'
end

# invoke my method by printing and calling the method name
p greeter

# Implicit return - returns the last line of the method



# Methods with Arguments

def greeter name
  "Hello #{name}"
end

p greeter "Trish"


# Multiple Arguments
    # Style guide has us using parenthesis around multiple arguments and params, however Ruby will accept it without as well.

def multiply(num1, num2)
  num1 * num2
end

p multiply(3, 7)
p multiply(6, 10)
p multiply(4, 9)
p multiply(1, 7)
p multiply(2, 8)


def multiply_three_numbers(num1, num2, num3)
  num1 * num2 * num3
end

p multiply_three_numbers(3, 7, 8)


# Conditionals

# 'if' is a keyword in Ruby and will need to evaluate something and provide a result
  # every 'if' needs a corresponding 'end'
# 'elsif' is a keyword in Ruby that will also need an evaluation if 'if' was false
# 'else' is a keyword in Ruby that will return something if everything else was false

def greater_num(num1, num2)
  if num1 > num2
    "#{num1} is greater"
  elsif num1 < num2
    "#{num2} is greater"
  else
    "#{num1} and #{num2} are equal"
  end
end

p greater_num(27, 22)
p greater_num(20, 22)
p greater_num(22, 22)





#  Getting User Input

# gets - is a method that will stop the execution of the program and wait for you to type something and hit enter

# my_name = gets
# p my_name # "Elyse\n"

# chomp is going to remove the \n which is a character line break

# my_name = gets.chomp
# p my_name # "Elyse"


puts 'Please enter your name'
user_name = gets.chomp
p user_name

puts 'Please enter your age'
user_age = gets.chomp.to_i
p user_age
p user_age.class


def can_you_vote(name, age)
  if age >= 18
    "Hi #{name}! #{age} is old enough to vote"
  else
    "Hi #{name}! #{age} is not old enough to vote"
  end
end

p can_you_vote(user_name, user_age)
