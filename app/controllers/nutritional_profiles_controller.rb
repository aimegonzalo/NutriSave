class NutritionalProfilesController < ApplicationController
    def show
      @nutritional_profile = NutritionalProfile.new
    end

  def new
    @nutritional_profile = NutritionalProfile.new
  end

  def edit
    @nutritional_profile = NutritionalProfile.new
  end

end
