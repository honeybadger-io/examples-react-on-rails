require "application_system_test_case"

class RouterTest < ApplicationSystemTestCase
  test "visiting the index" do
    visit "/"
    assert_selector "a", text: "Throw on client"
    assert_selector "a", text: "Throw on server"
  end
end
