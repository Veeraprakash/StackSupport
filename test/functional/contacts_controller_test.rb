require 'test_helper'

class ContactsControllerTest < ActionController::TestCase
  test "should get accinfo" do
    get :accinfo
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

end
