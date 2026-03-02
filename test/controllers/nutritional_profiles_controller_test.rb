require "test_helper"

class NutritionalProfilesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get nutritional_profiles_show_url
    assert_response :success
  end

  test "should get new" do
    get nutritional_profiles_new_url
    assert_response :success
  end

  test "should get edit" do
    get nutritional_profiles_edit_url
    assert_response :success
  end
end
