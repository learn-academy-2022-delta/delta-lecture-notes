class Hulu
    attr_accessor :title, :run_time, :consumed
    def initialize(title, run_time)
      @title = title
      @run_time = run_time
      @consumed = false
    end
    def get_show_data
      "The show #{@title} is #{@run_time} long."
    end
  end


  # streaming video - hulu netflix etc
  # streaming music - spotify, applemusic
  # internet - youtube, twitch

  class StreamingApp
    attr_accessor :title, :run_time, :consumed
    def initialize(title_parameter, run_time_parameter)
      @title = title_parameter
      @run_time = run_time_parameter
      @consumed = false
    end
    def get_show_data
      "The media #{@title} is #{@run_time} long."
    end
    def didConsume
        @consumed = true
    end
  end

class Netflix < StreamingApp
    def initialize(title_parameter, run_time_parameter, rating_parameter)
        # these are parameters that must be passed in to create the object
        super(title_parameter, run_time_parameter)
        # pulls the k-v pairs down from parent class  
        @rating = rating_parameter
    end
end

strangerThings = Netflix.new("Stranger Things", "50min", "PG-13")

# p strangerThings
#<Netflix:0x0000000123109fe0 @title="Stranger Things", @run_time="50min", @consumed=false, @rating="PG-13">

# p strangerThings.get_show_data
#<Netflix:0x0000000136891e58 @title="Stranger Things", @run_time="50min", @consumed=false, @rating="PG-13">
# "The media Stranger Things is 50min long."

#p strangerThings.consumed

class AudioMac < StreamingApp
    def initialize(title_parameter, run_time_parameter, artist_parameter)
        super(title_parameter, run_time_parameter)
        @artist = artist_parameter
    end
end

p portfolios = AudioMac.new('Portfolios', '1:36 min', 'MixMaster ELYSE')
#<AudioMac:0x0000000144830a78 @title="Portfolios", @run_time="1:36 min", @consumed=false, @artist="MixMaster ELYSE">

# must call the method before it will print out.  Trying to print out running the method will show no change
p portfolios

p portfolios.didConsume
#<AudioMac:0x0000000144830a78 @title="Portfolios", @run_time="1:36 min", @consumed=false, @artist="MixMaster ELYSE">

p portfolios
#<AudioMac:0x00000001440feac0 @title="Portfolios", @run_time="1:36 min", @consumed=true, @artist="MixMaster ELYSE">