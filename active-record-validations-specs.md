# Active Record Validations and Model Specs

Validations - Active Record statements that are added to the model class
  - Run each time you create or update an instance
  - Ensure the data that is getting passed in is what we are expecting

# Setup
$ rails new validations -d postgresql -T
$ cd validations
$ rails db:create

Installed RSpec gem
$ bundle add rspec-rails

Generated a spec folder to hold our RSpec tests
$ rails generate rspec:install

Generate a Model
$ rails g model Veteranarian name:string patients:integer

I want to check that Active Record will reject an instance that does not provide data on a specific column.


spec/models/veteranarian_spec.rb
```ruby
require 'rails_helper'

RSpec.describe Veteranarian, type: :model do
  it 'is valid with valid attributes' do
    veteranarian = Veteranarian.create(name: 'Dr. Doolittle', patients: 7)
    expect(veteranarian).to be_valid
  end

  it 'is not valid without a name' do
    veteranarian = Veteranarian.create(patients: 7)
    expect(veteranarian.errors[:name]).to_not be_empty
  end
end

```

Good Fail!

Update model to have validations:

/app/models/veteranarian.rb
```ruby
class Veteranarian < ApplicationRecord
  validates :name, presence: true
end

```