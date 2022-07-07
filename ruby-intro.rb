# Ruby Intro

# Commenting code - same keyboard shortcut, noted with a #

# Running a Ruby file in terminal: ruby <file-name.rb>


puts 5 + 7
# put string

puts 'hello delta!'
# => hello delta!
p 'hello delta'
# => "hello delta"




Code from terminal session:
➜  delta-lecture-notes git:(ruby-intro) ✗ irb
3.0.0 :001 > exit
➜  delta-lecture-notes git:(ruby-intro) ✗ irb
3.0.0 :001 > exit
➜  delta-lecture-notes git:(ruby-intro) ✗ irb
3.0.0 :001 > 5 + 6
 => 11
3.0.0 :002 > 5 - 5
 => 0
3.0.0 :003 > 5 * 3
 => 15
3.0.0 :004 > 6 / 3
 => 2
3.0.0 :005 > 4 ** 3
 => 64
3.0.0 :006 > 6 % 4
 => 2
3.0.0 :007 > 6 / 4
 => 1
3.0.0 :008 > 4.0
 => 4.0
3.0.0 :009 > 6.0 / 4
 => 1.5
3.0.0 :010 > 'hello!'
 => "hello!"
3.0.0 :011 > "hey y'all"
 => "hey y'all"
3.0.0 :012 > true
 => true
3.0.0 :013 > false
 => false
3.0.0 :014 > 7 > 8
 => false
3.0.0 :015 > 6 < 6
 => false
3.0.0 :016 > 3 > 4
 => false
3.0.0 :017 > 3 >= 6
 => false
3.0.0 :018 > 7 <= 8
 => true
3.0.0 :019 > 5 == 2+3
 => true
3.0.0 :020 > 5 == '5'
 => false
3.0.0 :021 > 4 != 8
 => true
3.0.0 :022 > 'hi' == 'hi' && 4 > 3
 => true
3.0.0 :023 > 'hi' == 'hi' || 4 > 6
 => true
3.0.0 :024 > nil
 => nil
3.0.0 :025 > my_name = 'sarah'
 => "sarah"
3.0.0 :026 > my_name
 => "sarah"
3.0.0 :027 > my_name = 9
 => 9
3.0.0 :028 > my_name
 => 9
3.0.0 :029 > my_name = 'sarah'
 => "sarah"
3.0.0 :030 > my_name
 => "sarah"
3.0.0 :031 > "Hey there, #{my_name}"
 => "Hey there, sarah"
3.0.0 :032 > 5
 => 5
3.0.0 :033 > my_name
 => "sarah"
3.0.0 :034 > my_name.length
 => 5
3.0.0 :035 > my_name.upcase
 => "SARAH"
3.0.0 :036 > my_name.capitalize
 => "Sarah"
3.0.0 :037 > my_name.reverse
 => "haras"
3.0.0 :038 > my_name.delete('h')
 => "sara"
3.0.0 :039 > my_name.delete'h'
 => "sara"
3.0.0 :040 > my_name
 => "sarah"
3.0.0 :041 > my_name.include?('s')
 => true
3.0.0 :042 > my_name.include?('n')
 => false
3.0.0 :043 > my_name.class
 => String
3.0.0 :044 > 3.class
 => Integer
3.0.0 :045 > 4.0.class
 => Float
3.0.0 :046 > true.class
 => TrueClass
3.0.0 :047 > false.class
 => FalseClass
3.0.0 :048 > nil.class
 => NilClass
3.0.0 :049 > 4.to_s
 => "4"
3.0.0 :050 > '9'.to_i
 => 9
3.0.0 :051 > my_nums = [2, 3, 45, 5, 9]
 => [2, 3, 45, 5, 9]
3.0.0 :052 > my_nums
 => [2, 3, 45, 5, 9]
3.0.0 :053 > my_nums.lenght
(irb):53:in `<main>': undefined method `lenght' for [2, 3, 45, 5, 9]:Array (NoMethodError)
Did you mean?  length
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
3.0.0 :054 > my_nums.length
 => 5
3.0.0 :055 > my_nums[0]
 => 2
3.0.0 :056 > my_nums[2]
 => 45
3.0.0 :057 > my_nums[9]
 => nil
3.0.0 :058 > my_nums[-1]
 => 9
3.0.0 :059 > my_nums[-2]
 => 5
3.0.0 :060 > my_nums.first
 => 2
3.0.0 :061 > my_nums.last
 => 9
3.0.0 :062 > my_nums.reverse
 => [9, 5, 45, 3, 2]
3.0.0 :063 > my_nums
 => [2, 3, 45, 5, 9]
3.0.0 :064 > my_nums.reverse.first
 => 9
3.0.0 :065 > my_nums
 => [2, 3, 45, 5, 9]
3.0.0 :066 > my_nums[0] = 8
 => 8
3.0.0 :067 > my_nums
 => [8, 3, 45, 5, 9]
3.0.0 :068 > my_nums << 99
 => [8, 3, 45, 5, 9, 99]
3.0.0 :069 > my_nums
 => [8, 3, 45, 5, 9, 99]
3.0.0 :070 > 6.reverse
(irb):70:in `<main>': undefined method `reverse' for 6:Integer (NoMethodError)
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
3.0.0 :071 > my_names
(irb):71:in `<main>': undefined local variable or method `my_names' for main:Object (NameError)
Did you mean?  my_name
               my_nums
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
3.0.0 :072 > my_name
 => "sarah"
3.0.0 :073 > my_name = my_name.reverse
 => "haras"
3.0.0 :074 > my_name
 => "haras"
3.0.0 :075 > my_name = 'sarah'
 => "sarah"
3.0.0 :076 > my_name.reverse!
 => "haras"
3.0.0 :077 > my_name
 => "haras"
3.0.0 :078 > exit
