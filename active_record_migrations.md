### ACTIVE RECORD MIGRATIONS LECTURE NOTES

# allow us to change the shape of an existing database.
- add or columns
- delete columns
- change the name of a column
- change the data type of a column

# RAILS SET UP COMMANDS
$  rails new songapp -d postgresql -T
$ rails db:create



$ rails generate model Song song_name:string artist_name:string
 invoke  active_record
      create    db/migrate/20220715175715_create_songs.rb
      create    app/models/song.rb


$ rails db:migrate  
 20220715175715 CreateSongs: migrating ======================================
-- create_table(:songs)
   -> 0.0076s
== 20220715175715 CreateSongs: migrated (0.0077s) =============================    


$ rails generate migration add_column_runtime_to_songs

go to the migration file in your text editor

class AddColumnRuntimeToSongs < ActiveRecord::Migration[7.0]
  def change
    add_column :songs, :runtime, :string
  end
end
### ACTIVE RECORD MIGRATIONS LECTURE NOTES

# allow us to change the shape of an existing database.
- add or columns
- delete columns
- change the name of a column
- change the data type of a column

## RAILS SET UP COMMANDS
 $ rails new <app_name> -d postgresql -T  
   the -d flag denotes we're assigning a db type  
   the -T flag say drop built in testing

 $ cd <app_name>
 $ rails db:create
 $ rails generate model Song song_name:string artist_name:string

 <terminalresponse>
  invoke  active_record
      create    db/migrate/20220715175715_create_songs.rb
      create    app/models/song.rb
  <>

 $ rails db:migrate
   
<terminalresponse>
  20220715175715 CreateSongs: migrating ======================================
-- create_table(:songs)
   -> 0.0076s
== 20220715175715 CreateSongs: migrated (0.0077s) ============================= 
<>


## RAILS CONSOLE COMMANDS
> rails c
> Song.create(song_name:”Love”, song_artist:”Keyshia Cole”)
> Song.create(song_name:”Shoop”, song_artist:”Salt-n-Peppa”)
> exit

## GENERATING A MIGRATION
# Add a column
$ rails generate migration add_runtime_to_songs

go to the migration file in your text editor >>>>>

    class AddColumnRuntimeToSongs < ActiveRecord::Migration[7.0]
      def change
        add_column :songs, :runtime, :string
      end
    end

$ rails db:migrate
 <terminaloutput>
    20220715180807 AddColumnRuntimeToSongs: migrating ==========================
    -- add_column(:songs, :runtime, :string)
      -> 0.0067s
    == 20220715180807 AddColumnRuntimeToSongs: migrated (0.0068s) =================


$ rails generate migration change_name_of_column_song_name_to_name


In text editor -- go to migration file: 

  Rename_column :columnname, :currentColumnName :newColumnName


$ rails db:migrate

20220715180807 AddColumnRuntimeToSongs: migrating ==========================
-- add_column(:songs, :runtime, :string)
   -> 0.0067s
== 20220715180807 AddColumnRuntimeToSongs: migrated (0.0068s) =================
