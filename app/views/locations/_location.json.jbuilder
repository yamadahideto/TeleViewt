json.extract! location, :id, :name, :longitud, :latitude, :created_at, :updated_at
json.url location_url(location, format: :json)
