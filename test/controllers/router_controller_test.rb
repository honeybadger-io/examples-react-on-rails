require "test_helper"

class RouterControllerTest < ActionDispatch::IntegrationTest
  test "gets index" do
    get "/"
    assert_response :success
  end
end
