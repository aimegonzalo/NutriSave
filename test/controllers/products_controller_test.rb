require "test_helper"

class ProductsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get products_index_url
    assert_response :success
  end

  test "should get show" do
    get products_show_url
    assert_response :success
  end

  test "should get compatibility" do
    get products_compatibility_url
    assert_response :success
  end

  test "should get compare" do
    get products_compare_url
    assert_response :success
  end

  test "should get alternatives" do
    get products_alternatives_url
    assert_response :success
  end
end
