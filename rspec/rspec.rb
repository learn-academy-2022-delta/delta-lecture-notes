class Book 
  attr_accessor :title, :author, :page
  def initialize author='anonymous'
    @title = title
    @author = author
    @page = 1
  end

  def read pages_read
    @page += pages_read
  end
end

# my_book = Book.new
# p my_book.page
# my_book.read 50
# p my_book.page