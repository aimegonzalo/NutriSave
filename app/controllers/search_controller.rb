class SearchController < ApplicationController
  def search
    @results = []
    if params[:search].present? && params[:search][:name].present?
      @results = Product.where("name LIKE ?", "%#{params[:search][:name]}%")
    end
  end

end
