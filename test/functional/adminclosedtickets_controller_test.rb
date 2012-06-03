require 'test_helper'

class AdminclosedticketsControllerTest < ActionController::TestCase
  test "should get show" do
    get :show
    assert_response :success
  end

  test "should get view" do
    get :view
    assert_response :success
  end

  test "should get assign" do
    get :assign
    assert_response :success
  end

  test "should get support" do
    get :support
    assert_response :success
  end

end
