require 'test_helper'

class KnowlwedgebaseControllerTest < ActionController::TestCase
  test "should get kbase" do
    get :kbase
    assert_response :success
  end

  test "should get show" do
    get :show
    assert_response :success
  end

  test "should get detail" do
    get :detail
    assert_response :success
  end

end
