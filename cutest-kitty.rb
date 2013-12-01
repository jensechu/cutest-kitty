require 'sinatra'

set :public_folder, File.dirname(__FILE__) + '/assets'

get '/' do
  erb :home, :layout => :layout
end
