require "test_helper"

class RoomtypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @roomtype = roomtypes(:one)
  end

  test "should get index" do
    get roomtypes_url, as: :json
    assert_response :success
  end

  test "should create roomtype" do
    assert_difference("Roomtype.count") do
      post roomtypes_url, params: { roomtype: { name: @roomtype.name } }, as: :json
    end

    assert_response :created
  end

  test "should show roomtype" do
    get roomtype_url(@roomtype), as: :json
    assert_response :success
  end

  test "should update roomtype" do
    patch roomtype_url(@roomtype), params: { roomtype: { name: @roomtype.name } }, as: :json
    assert_response :success
  end

  test "should destroy roomtype" do
    assert_difference("Roomtype.count", -1) do
      delete roomtype_url(@roomtype), as: :json
    end

    assert_response :no_content
  end
end
