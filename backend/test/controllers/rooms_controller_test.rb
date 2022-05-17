require "test_helper"

class RoomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @room = rooms(:one)
  end

  test "should get index" do
    get rooms_url, as: :json
    assert_response :success
  end

  test "should create room" do
    assert_difference("Room.count") do
      post rooms_url, params: { room: { building: @room.building, guest: @room.guest, name: @room.name, price: @room.price } }, as: :json
    end

    assert_response :created
  end

  test "should show room" do
    get room_url(@room), as: :json
    assert_response :success
  end

  test "should update room" do
    patch room_url(@room), params: { room: { building: @room.building, guest: @room.guest, name: @room.name, price: @room.price } }, as: :json
    assert_response :success
  end

  test "should destroy room" do
    assert_difference("Room.count", -1) do
      delete room_url(@room), as: :json
    end

    assert_response :no_content
  end
end
