#  RUBY BLOCK AND ITERATION

# while - needs a starting and ending point, condition starts as true and eventually becomes false

num = 1
while num <= 10
    num += 1
    p num
end

# Block = anonymous function that can be passed into a method
# must use either do / end  or {}

# Times

 7.times do 
    p 'hello world'
 end
 
 7.times { p 'hello world' }

 num = 7
 num.times do
    p 'hello world'
 end

 #-------

 # Each - iterator that works on a list of items, needs an array

 nums = [3,4,5]
 nums.each do |value|
    p value * 5
 end

#-------
# RANGES 
# list of values ==> give start and end separated by 2 dots

p 1..10

a_range = 1..10
a_range.each do |value|
    p value * 5
end

a_range = 'a'..'h'
a_range.each do |value|
    p value
end

p a_range.to_a  # to_a ==== converts to an array

#--------
# MAP
# iterator returns array of the same length of the thing you're acting on

nums = 1..10
mapped = nums.map do |item|
    item * 3
end
p mapped

mapped = nums.map do |value|
    if value % 2 == 0
       "even #{value}"   # to add text to your output use double quotes
                            #and  #{variable}
    else 
       value
    end    
end

p mapped

mapped = nums.map do |banana|
    if banana.even?
       'even'
    else 
       value
    end    
end

p mapped

def even_or_odd array
    array.map do |value|
        if value.even?
           'even'
        else 
           'odd'
        end    
     end
end

p even_or_odd 1..10

# -----

# SELECT
# iterator, has built in if statement, returns a subset of the array that meet the condition

def only_odds array  # defining a method and telling it what we are     going to pass it
    array.select do |value| # take that array, iterate over each value (the parameter)  and filter/select only those items that meet the condition below
        value.odd?  # set condition -- is the value odd?  if so return the value, if not ignore the value
    end
end

p only_odds 1..10  # output will be only odd number [1, 3, 5, 7, 9]

