require "test_helper"

class ServiceroomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @serviceroom = servicerooms(:one)
  end

  test "should get index" do
    get servicerooms_url, as: :json
    assert_response :success
  end

  test "should create serviceroom" do
    assert_difference("Serviceroom.count") do
      post servicerooms_url, params: { serviceroom: { name: @serviceroom.name } }, as: :json
    end

    assert_response :created
  end

  test "should show serviceroom" do
    get serviceroom_url(@serviceroom), as: :json
    assert_response :success
  end

  test "should update serviceroom" do
    patch serviceroom_url(@serviceroom), params: { serviceroom: { name: @serviceroom.name } }, as: :json
    assert_response :success
  end

  test "should destroy serviceroom" do
    assert_difference("Serviceroom.count", -1) do
      delete serviceroom_url(@serviceroom), as: :json
    end

    assert_response :no_content
  end
end
