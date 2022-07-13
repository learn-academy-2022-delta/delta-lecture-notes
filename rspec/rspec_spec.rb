# RSPEC
  # Domain Specific Language - specialized for a particular task
  # Rspec is specialized for testing Ruby code
  # Rspec is a Ruby gem which is a package manager for Ruby

# TDD - Test Driven Development
  # Red - Green - Refactor

require 'rspec'
require_relative 'rspec.rb'

describe 'Book' do 
  it 'has to be real' do 
    expect{ Book.new }.to_not raise_error
  end

  it 'has a title' do
    # Arrange
    my_book = Book.new
    # Act
    my_book.title = 'The Hobbit'
    # Assert
    expect(my_book.title).to be_a String
    expect(my_book.title).to eq 'The Hobbit'
  end

  it 'has an author' do 
    my_book = Book.new
    expect(my_book.author).to be_a String
    expect(my_book.author).to eq 'anonymous'
    the_hobbit = Book.new 'J.R.R. Tolkien'
    expect(the_hobbit.author).to eq 'J.R.R. Tolkien'
  end

  it 'can report the current page' do 
    my_book = Book.new
    expect(my_book.page).to be_a Integer
    expect(my_book.page).to eq 1
  end

  it 'can read pages' do 
    my_book = Book.new
    expect{ my_book.read 50 }.to change{ my_book.page }.from(1).to(51)
  end
end