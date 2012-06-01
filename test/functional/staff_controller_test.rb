require 'test_helper'

class StaffControllerTest < ActionController::TestCase
  test "should get ticket" do
    get :ticket
    assert_response :success
  end

  test "should get time" do
    get :time
    assert_response :success
  end

end
