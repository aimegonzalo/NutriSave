# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
puts "Limpiando base de datos..."

Favorite.destroy_all
Report.destroy_all
ProductDietaryTag.destroy_all
ProductSource.destroy_all
NutritionalProfile.destroy_all
DietaryTag.destroy_all
Product.destroy_all
Location.destroy_all
DataSource.destroy_all
User.destroy_all

puts "Creando usuario..."

user = User.create!(
  email: "usuario@nutrisave.com",
  password: "123456"
)

puts "Creando producto..."

product = Product.create!(
  name: "Barra Proteica",
  brand: "NutriMarca",
  category: "Snacks",
  ingredients: "Maní, Proteína de suero, Chocolate",
  contains_allergens: "Maní",
  warnings: "Puede contener trazas de soja",
  image_url: "https://ejemplo.com/imagen.jpg",
  active: true,
  admin_notes: "Producto creado desde seeds"
)

puts "Creando etiqueta nutricional..."

tag = DietaryTag.create!(
  name: "Alto en Proteína",
  description: "Producto con alto contenido proteico",
  category: "Macronutrientes"
)

ProductDietaryTag.create!(
  product: product,
  dietary_tag: tag
)

puts "Creando ubicación..."

location = Location.create!(
  name: "Carrefour Palermo",
  store_chain: "Carrefour",
  address: "Av. Santa Fe 1234",
  city: "Buenos Aires",
  latitude: -34.5875,
  longitude: -58.3974,
  phone: "1122334455",
  opening_hours: "9:00 - 21:00"
)

puts "Creando fuente de datos..."

data_source = DataSource.create!(
  name: "Carga Manual",
  source_type: 0,
  base_url: "https://manual.nutrisave.com",
  active: true,
  last_synced_at: Time.current
)

puts "Creando precio del producto..."

ProductSource.create!(
  product: product,
  location: location,
  data_source: data_source,
  store_name: "Carrefour",
  price: 1200.50,
  currency: "ARS",
  last_updated_at: Time.current
)

puts "Creando favorito..."

Favorite.create!(
  user: user,
  product: product
)

puts "Creando perfil nutricional..."

NutritionalProfile.create!(
  user: user,
  diet_type: "Alta en proteínas",
  goal: "Aumento de masa muscular",
  allergies: "Maní",
  medical_conditions: "Ninguna",
  excluded_ingredients: "Soja",
  digestive_sensitivity: false
)

puts "Creando reporte..."

Report.create!(
  user: user,
  product: product,
  reason: "Ingredientes incorrectos",
  description: "La lista de ingredientes no coincide con el envase",
  status: "pendiente"
)

puts "Seed completado correctamente 🚀"
