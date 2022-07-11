# RUBY HASHES 

# have key-value pairs where the key is a symbol and the value any type of data that Ruby recognizes

# to access the value, you reference the key

# Hash Structure
#key: value pairs are inside curly braces
# keys are of type Symbol
# value any type of data that Ruby recognizes
# Key-value pairs are separated by commas
# 2 ways to create a Hash - first, define it and set to variable
person = {first_name: "Buffy", last_name: "Summers", title: "Vampire Slayer"}
#p person

{:first_name=>"Buffy", :last_name=>"Summers", :title=>"Vampire Slayer"}

people = Hash.new()
p people  # {}

#Manipulating Hashes

#CRUD  
# C - create
# R - read/return
# U - update
# D - delete

# Read/Return - returns all the data in the hash (Read)

person = {first_name: "Buffy", last_name: "Summers", title: "Vampire Slayer"}
# p person[:first_name]
# output "Buffy"

# Add content to the Hash
person[:mother] = 'Joyce'
# p person

person[:love_interests] =['Angel', 'Spike']
# p person

# Update content in the Hash
# to update the value we can just assign the key a new value

person[:title] = "The Chosen One"
# p person

# update the key, we need to do a little more
person[:mom] = person.delete(:mother)

# Remove content from the hash
person.delete(:last_name)
p person

#  ENUMERABLES  
#MODULES -  way of grouping together like things that have similar properties. 
#  main in ruby is enumerable module
# Hashes, arrays, ranges


characters = {slayer:'Buffy', witch: 'Willow', vampire: 'Spike'}

characters.each do | key, value |
#    p "#{value}'s role is the #{key}."
end

def buffy_roles hash
    hash.map do | key, value |
        "#{value} is a #{key}"
    end
end
p buffy_roles characters