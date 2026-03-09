class NutritionalProfilesController < ApplicationController
    def show
    @nutritional_profile = NutritionalProfile.find(params[:id])
    end

  def new
    @nutritional_profile = NutritionalProfile.new
  end


  def edit
    @nutritional_profile = NutritionalProfile.find(params[:id])
  end

  def create
    @nutritional_profile = NutritionalProfile.new(nutritional_profile_params)

    if @nutritional_profile.save
      redirect_to @nutritional_profile, notice: 'Nutritional profile was successfully created.'
    else
      render :new
    end
  end

  private

    def nutritional_profile_params
      params.require(:nutritional_profile).permit(:diet_type, :goal, :allergies, :medical_conditions, :excluded_ingredients, :digestive_sensitivity)
    end

end
