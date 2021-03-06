require "test_helper"

class MeetingRoomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @meeting_room = meeting_rooms(:one)
  end

  test "should get index" do
    get meeting_rooms_url, as: :json
    assert_response :success
  end

  test "should create meeting_room" do
    assert_difference("MeetingRoom.count") do
      post meeting_rooms_url, params: { meeting_room: { name: @meeting_room.name, people: @meeting_room.people, price: @meeting_room.price, table: @meeting_room.table } }, as: :json
    end

    assert_response :created
  end

  test "should show meeting_room" do
    get meeting_room_url(@meeting_room), as: :json
    assert_response :success
  end

  test "should update meeting_room" do
    patch meeting_room_url(@meeting_room), params: { meeting_room: { name: @meeting_room.name, people: @meeting_room.people, price: @meeting_room.price, table: @meeting_room.table } }, as: :json
    assert_response :success
  end

  test "should destroy meeting_room" do
    assert_difference("MeetingRoom.count", -1) do
      delete meeting_room_url(@meeting_room), as: :json
    end

    assert_response :no_content
  end
end
